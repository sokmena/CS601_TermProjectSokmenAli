function validateForm(){

  let to_submit = 2 // we check for two errors, subtract one each time and submit when we have 0;
  
  let errors = document.getElementById("errors");
  let formatErr = document.getElementById("formatErr");
  let extensionErr = document.getElementById("extensionErr");
  let success = document.getElementById("success");

  // making sure that error notes are reset when the user presses submit again
  errors.style.display = "none";
  formatErr.style.display = "none";
  extensionErr.style.display = "none";

  // getting DOM element
  let email = document.forms["subscribe"]["email"].value;

  /* first we check if the user entered blanks, we use an alert here. 
  HTML5 checks this in browser but we still check in case of older browsers */
  if (email === "") {
    console.log("User entered empty fields");
    alert("Please do not leave the field blank.");
    return false;
  }

  // perform validation
  if (checkRegex(email) === false) {
    console.log("Email format wrong");
    errors.style.display = "inline-block";
    formatErr.style.display = "block";
  } else {
    to_submit--;
  }

  if (checkExtension(email) === false) {
    console.log("Email extension wrong");
    errors.style.display = "inline-block";
    extensionErr.style.display = "block";
  } else {
    to_submit--;
  }


  // finally we check if all three conditions have been met
  if (to_submit === 0){
    console.log("Form submit successful");
    success.style.display = "inline-block";
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

    for (ending of endings) {
        if (name.endsWith(ending)){
            status = true;
            return status;
        }
    }
    return status;
}