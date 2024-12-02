/*
CustomJs.js
Jason Osondu Nsonwu-duru
Student No. 19224346
Web Design CA2 (Group Project)
25.11.2024
*/

//Form Validation for Sign up
function validateSignupForm(event) {
  event.preventDefault(); //Prevent form submission

  //Get Form input values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const membership = document.getElementById('membership').value;
  const cardName = document.getElementById('cardNam').value.trim();
  const cardNumber = document.getElementById('cardNumber').value.trim();
  const cardExpiry = document.getElementById('cardExpiry').value.trim();
  const cardCVV = document.getElementById('cardCVV').value.trim();

  //Reset previous error messages
  clearErrors();

  //Validate full name (at least 2 words)
  if (fullName === "") {
    displayError("fullName', 'Please enter your full name");
    return false;
  }

  //Validate email format
  if (email === "" || !isValidEmail(email)) {
    displayError("email", "Please enter a valid email address");
    return false;
  }

  //Validate password
  if (password.length < 8) {
    displayError("password", "Password must be at least 8 characters long");
    return false;
  }

  //Check if passwords match
  if (password !== confirmPassword) {
    displayError("confirmPassword", "Passwords do not match");
    return false;
  }
  
  //Validate membership selection
  if (membership === ""){
	  displayError("membership", "Please select a membership type");
	  return false;
  }
  
  //Validate card details if membership requires payment
  if (membership !== "none-student"){
	  //Validate cardholder name
	  if (cardName === ""){
		  displayError("cardName", "Please enter cardholder name");
		  return false;
	  }
	  
	  //Validate card number
	  if (cardNumber === "" || !isValidCardNymber(cardNumber)){
		  displayError("cardNumber", "Please enter a valid card number");
		  return false;
	  }
	  
	  //Validate card expiry
	  if (cardExpiry === "" || !isValidExpiry(cardExpiry)){
		  displayError("cardExpiry", "Please enter a valid expiry date (MM/YY)");
		  return false;
	  }
	  
	  //Validate CVV
	  if (cardCVV === "" || !isValidCVV(cardCVV)){
		  displayError("cardCVV", "Please enter a valid CVV");
		  return false;
	  }
  }

  //If all validations pass, show success message
  alert("Sign up successful");
  return true;
}

//Additional Validation functions
function isValidCardNumber(cardNumber){
	//Checking if card number is 16 digits
	const cardRegex = /^\d{16}$/;
	return cardRegex.test(cardNumber);
}

function isValidExpiry(expiry){
	//checking expiry format MM/YY
	const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
	return expiryRegex.test(expiry);
}

function isValidCVV(cvv){
	//confirm if cvv is 3 digits
	const cvvRegex = /^\d{3}$/;
	return cvvRegex.test(cvv);
}


//Form validation for Sign In form
function validateSigninForm(event) {
  event.preventDefault(); //prevent's form submission

  //Get form elements
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  //Reset any existing error messages
  clearErrors();

  //Validate email format
  if (email === "" || !isValidEmail(email)) {
    displayError("loginEmail", "Please enter a valid email address");
    return false;
  }

  //Validate password is not empty
  if (password === "") {
    displayError("loginPassword", "Please enter your password");
    return false;
  }

  //If all validations pass, show success message
  alert("Sign in successful");
  return true;
}

//Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//Helper function to show error messages
function displayError(inputId, message) {
  const existingError = document.getElementById(inputId).nextElementSibling;
  if (existingError && existingError.classList.contains("error-message")) {
    existingError.remove();
  }

  //create and displays new error message
  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;

  const inputElement = document.getElementById(inputId);
  inputElement.insertAdjacentElement("afterend", errorElement);
}

//Helper function to clear all error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => error.remove());
}

// JavaScript validation for the Contact Page Form
document
  .getElementById("contactFormGym")
  .addEventListener("submit", function (event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Get the email value and the email error display element
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");

    // Define a regular expression (regex) pattern for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
      // If email doesn't match, show an error message
      emailError.textContent = "Please enter a valid email address.";
    } else {
      // Clear any error if the email is valid
      emailError.textContent = "";

      // Show a success message
      alert("Thank you for your feedback, we will contact you soon!");
      document.getElementById("contactFormGym").reset();
    }
  });

// Adding card details prompt on the screen for the user
function promptCardDetails() {
    try {
        // Prompt for Card Number (16 digits)
        let cardNumber = prompt("Please enter your 16-digit card number:");
        if (!cardNumber || cardNumber.length !== 16 || !/^\d{16}$/.test(cardNumber)) {
            throw "Invalid card number. Try again.";
        }

        // Prompt for Expiry Date (MM/YY)
        let expiryDate = prompt("Please enter the card expiry date (MM/YY):");
        if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
            throw "Invalid expiry date. Try again.";
        }

        // Prompt for Card PIN (3 digits)
        let cardPin = prompt("Enter your card 3-digit PIN:");
        if (!cardPin || !/^\d{3}$/.test(cardPin)) {
            throw "Invalid PIN. Please try again.";
        }

        // Display confirmation if all inputs are valid
        alert("Thank you! Your payment is being processed.");
    } catch (error) {
        // Display error message
        alert(error);
    }
}



    