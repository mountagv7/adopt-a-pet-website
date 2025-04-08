const express = require('express');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'adopt-secret',
  resave: false,
  saveUninitialized: true
}));

const loginFile = 'login.txt';
const petFile = 'pets.txt';

function renderPage(res, filePath, req) {
  const header = fs.readFileSync(path.join(__dirname, 'views', 'header.html'), 'utf8')
    .replace('<!--USERNAME-->', req.session.user ? `Logged in as <strong>${req.session.user}</strong>` : 'Not signed in');

  const footer = fs.readFileSync(path.join(__dirname, 'views', 'footer.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'views', filePath), 'utf8');

  let messageHtml = '';
  if (req.session.message) {
    messageHtml = `<div class="message">${req.session.message}</div>`;
    req.session.message = null; // clear message after showing
  }

  res.send(header + messageHtml + content + footer);
}

// GET pages
app.get('/', (req, res) => renderPage(res, 'home.html', req));
app.get('/giveaway_pet', (req, res) => renderPage(res, 'giveaway_pet.html', req));
app.get('/find_pet', (req, res) => renderPage(res, 'find_pet.html', req));
app.get('/dog_care', (req, res) => renderPage(res, 'dog_care.html', req));
app.get('/cat_care', (req, res) => renderPage(res, 'cat_care.html', req));
app.get('/contact', (req, res) => renderPage(res, 'contact.html', req));
app.get('/create_account', (req, res) => renderPage(res, 'create_account.html', req));
app.get('/login', (req, res) => renderPage(res, 'login.html', req));

// Account creation
app.post('/create-account', (req, res) => {
  const { username, password } = req.body;
  const users = fs.existsSync(loginFile) ? fs.readFileSync(loginFile, 'utf8').split('\n') : [];
  if (users.find(line => line.split(':')[0] === username)) {
    req.session.message = '❌ Username already exists.';
    return res.redirect('/');
  }
  fs.appendFileSync(loginFile, `${username}:${password}\n`);
  req.session.user = username;
  req.session.message = `✅ Account created. Welcome, ${username}!`;
  res.redirect('/');
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = fs.existsSync(loginFile) ? fs.readFileSync(loginFile, 'utf8').split('\n') : [];
  const match = users.find(line => line.trim() === `${username}:${password}`);
  if (match) {
    req.session.user = username;
    req.session.message = `✅ Welcome back, ${username}!`;
    res.redirect('/');
  } else {
    req.session.message = '❌ Login failed. Incorrect username or password.';
    res.redirect('/');
  }
});

// Submit pet
app.post('/submit-pet', (req, res) => {
  if (!req.session.user) {
    req.session.message = '❌ You must be logged in to give away a pet.';
    return res.redirect('/');
  }
  const existing = fs.existsSync(petFile) ? fs.readFileSync(petFile, 'utf8').trim().split('\n') : [];
  const newId = existing.length + 1;
  const petEntry = [
    newId,
    req.session.user,
    req.body.animalType,
    req.body.breed,
    req.body.age,
    req.body.gender,
    req.body.getAlongDogs,
    req.body.getAlongCats,
    req.body.suitableForFamily,
    req.body.comment,
    req.body.ownerName,
    req.body.ownerEmail
  ].join(':');
  fs.appendFileSync(petFile, petEntry + '\n');
  req.session.message = '✅ Pet submitted successfully.';
  res.redirect('/');
});

// Logout
app.get('/logout', (req, res) => {
  req.session.user = null;
  req.session.message = '👋 You have been logged out.';
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
