function validEmail(str) {
  //your JS code here.
return /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]+)*(\.[a-zA-Z]{2,3})$/.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
