function validateForm(){

  let to_submit = 2 // we check for two errors, subtract one each time and submit when we have 0;
  
  let errors = document.getElementById("errors");
  let formatErr = document.getElementById("formatErr");
  let extensionErr = document.getElementById("extensionErr");


  // making sure that error notes are reset when the user presses submit again
  errors.style.display = "none";
  formatErr.style.display = "none";
  extensionErr.style.display = "none";


  // getting DOM element
  let email = document.forms["subscribe"]["email"].value;

  // first we check if the user entered blanks, we use an alert here
  if (email === "") {
    console.log("User entered empty fields");
    alert("Please do not leave the field blank.");
    return false;
  }

/*
  // below conditionals perform the validation of fields using the functions
  if (checkLength(email) === false) {
    console.log("Email address too short");
    errors.style.display = "inline-block";
    formatErr.style.display = "inline-block";
  } else {
    to_submit--;
  }
*/

  if (checkRegex(email) === false) {
    console.log("Email format wrong");
    errors.style.display = "inline-block";
    formatErr.style.display = "inline-block";
  } else {
    to_submit--;
  }

  if (checkExtension(email) === false) {
    console.log("Email extension wrong");
    errors.style.display = "inline-block";
    extensionErr.style.display = "inline-block";
  } else {
    to_submit--;
  }


  // finally we check if all three conditions have been met
  if (to_submit === 0){
    console.log("Form submit successful");
    return true;
  } else {
    console.log("Form submit failed");
    return false;
  }
}

// function to check email regex. source: https://www.w3resource.com/javascript/form/email-validation.php
function checkRegex(name){
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(name) === false){
    return false;
  }
}

// function to check email domain name extensions
function checkExtension(name){
    let endings = [".com",".net",".org",".edu"];
    let status = false;

    for (ending in endings) {
        if (name.endsWith(ending)){
            status = true;
        }
    }
    return status;
}

/*
// function to check name length
function checkLength(name){
  if (name.length < 2){
    return false;
  }
}
*/