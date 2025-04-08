// giveaway_pet.js

function validateForm() {
    let animalType = document.forms["giveawayForm"]["animalType"].value;
    let breed = document.forms["giveawayForm"]["breed"].value;
    let age = document.forms["giveawayForm"]["age"].value;
    let gender = document.forms["giveawayForm"]["gender"].value;
    let getAlongDogs = document.forms["giveawayForm"]["getAlongDogs"].value;
    let getAlongCats = document.forms["giveawayForm"]["getAlongCats"].value;
    let suitableForFamily = document.forms["giveawayForm"]["suitableForFamily"].value;
    let comment = document.forms["giveawayForm"]["comment"].value;
    let ownerName = document.forms["giveawayForm"]["ownerName"].value;
    let ownerEmail = document.forms["giveawayForm"]["ownerEmail"].value;

    if (animalType == "" || breed == "" || age == "" || gender == "" || 
        getAlongDogs == "" || getAlongCats == "" || suitableForFamily == "" || 
        comment == "" || ownerName == "" || ownerEmail == "") {
        alert("All fields must be filled out.");
        return false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(ownerEmail)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}
