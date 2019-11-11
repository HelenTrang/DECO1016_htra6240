//this valiadates whether there are text inputted or not
function validate(form) {


    var firstName = document.getElementbyId("signup-inputs-firstname");
    var lastName = document.getElementbyId("signup-inputs-lastname");
    var dateofBirth = document.getElementbyId("signup-date-of-birth");
    var email = documet.getElementbyId("signup-inputs-email");
    var number = document.getElementbyId("signup-inputs-phonenumber");
    var password = document.getElementbyId("signup-inputs-createpassword");

    if (form.firstName.value == "" || form.lastName == "" || form.dateofBirth == "" || form.email =="" ||form.number =="" ||form.password=="") {
        return false;
    } else {
       return true


    }
}
//first name
var inputFirstName= document.getElementById("signup-inputs-firstname");
localStorage.setItem("signup-inputs-firstname", inputFirstName.value);

var storedValue = localStorage.getItem("signup-inputs-firstname");

//lastname
var inputLastName= document.getElementById("signup-inputs-lastname");
localStorage.setItem("signup-inputs-lastname", inputLastName.value);

var storedValue2 = localStorage.getItem("signup-inputs-lastname");

//date of birth
var inputDateofBirth= document.getElementById("signup-date-of-birth");
localStorage.setItem("signup-date-of-birth", inputDateofBirth.value);

var storedValue3 = localStorage.getItem("signup-date-of-birth");

//email
var inputEmail= document.getElementById("signup-inputs-email");
localStorage.setItem("signup-inputs-email", InputEmail.value);

var storedValue4 = localStorage.getItem("signup-inputs-email");

//phone number
var inputPhoneNumber= document.getElementById("signup-inputs-phonenumber");
localStorage.setItem("signup-inputs-phonenumber", inputPhoneNumber.value);

var storedValue5 = localStorage.getItem("signup-inputs-phonenumber");

//card number
var inputCardNumber= document.getElementById("signup-inputs-cardnumber");
localStorage.setItem("signup-inputs-cardnumber", inputCardNumber.value);

var storedValue6 = localStorage.getItem("signup-inputs-cardnumber");

//
var inputCardNumber= document.getElementById("signup-inputs-cardnumber");
localStorage.setItem("signup-inputs-cardnumber", inputCardNumber.value);

var storedValue6 = localStorage.getItem("signup-inputs-cardnumber");


function store(){
    var inputFirstName = document.getElementById("signup-inputs-firstname");
    localStorage.setItem("signup-inputs-firstname", inputFirstName.value);

    var inputLastName = document.getElementById("signup-inputs-lastname");
    localStorage.setItem("signup-inputs-lastname", inputLastName.value);

    var inputDateofBirth = document.getElementById("signup-date-of-birth");
    localStorage.setItem("signup-date-of-birth", inputDateofBirth.value);

    var inputEmail = document.getElementById("signup-inputs-email");
    localStorage.setItem("signup-inputs-email", inputEmail.value);

    var inputPhoneNumber = document.getElementById("signup-inputs-phonenumber");
    localStorage.setItem("signup-inputs-phonenumber", inputPhoneNumber.value);

    var inputPhoneNumber = document.getElementById("signup-inputs-phonenumber");
    localStorage.setItem("signup-inputs-phonenumber", inputPhoneNumber.value);

    
    var inputCardNumber = document.getElementById("signup-inputs-cardnumber");
    localStorage.setItem("signup-inputs-cardnumber", inputCardNumber.value);
}