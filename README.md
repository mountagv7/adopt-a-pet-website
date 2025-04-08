# Adopt A Cat/Dog Website 🐾

This is a Node.js-based web application for managing a pet adoption platform.

Users can:
- Find cats/dogs based on criteria
- Give away a pet (must be logged in)
- Create an account
- Log in and log out
- View pet care pages and contact info
- See a dynamic header with live date/time
- Get success/failure messages on actions

---

## 💻 Tech Stack

- Node.js with Express
- HTML, CSS, JavaScript
- Sessions via express-session
- File-based data storage (pets.txt, login.txt)

---

## 📁 Project Structure

```
Pet-Website/
├── server.js
├── login.txt
├── pets.txt
├── question7a2.css
├── datetime.js
├── giveaway_pet.js
├── find_pet.js
├── logo.webp
├── views/
│   ├── header.html
│   ├── footer.html
│   ├── home.html
│   ├── giveaway_pet.html
│   ├── find_pet.html
│   ├── dog_care.html
│   ├── cat_care.html
│   ├── contact.html
│   ├── create_account.html
│   └── login.html
```

---

## 🚀 How to Run Locally

Make sure Node.js is installed.

1. Open terminal in the project folder
2. Install dependencies:

```bash
npm install express express-session
```

3. Run the server:

```bash
node server.js
```

4. Open your browser and go to:

```
http://localhost:3000
```

---

## 👤 Author

Mountaga Sy  
Student at Concordia University  
GitHub: [@mountagv7](https://github.com/mountagv7)

---

## 📜 License

For educational/demo purposes only.

