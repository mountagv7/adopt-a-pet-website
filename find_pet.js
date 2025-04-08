
    document.getElementById("findPetForm").addEventListener("submit", function(event) {
        let valid = true;
        document.querySelectorAll(".error").forEach(e => e.textContent = "");

        if (document.getElementById("animal").value === "") {
            document.getElementById("animalError").textContent = "Please select an animal.";
            valid = false;
        }
        if (document.getElementById("breed").value.trim() === "") {
            document.getElementById("breedError").textContent = "Please enter a breed.";
            valid = false;
        }
        if (document.getElementById("age").value === "") {
            document.getElementById("ageError").textContent = "Please select an age.";
            valid = false;
        }
        if (document.getElementById("gender").value === "") {
            document.getElementById("genderError").textContent = "Please select a gender.";
            valid = false;
        }

        if (!valid) event.preventDefault();
    });

