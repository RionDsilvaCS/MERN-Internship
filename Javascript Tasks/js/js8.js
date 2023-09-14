var alertMessage = "POOR"

function checkEmpty(form) {

    if(form.firstName.value == ""){
        document.getElementById("firstNameAlert").innerHTML =alertMessage;
    }

    if(form.lastName.value == ""){
        document.getElementById("lastNameAlert").innerHTML =alertMessage;
    }

    if(form.email.value == ""){
        document.getElementById("emailAlert").innerHTML =alertMessage;
    }

    if(form.phoneNumber.value == ""){
        document.getElementById("addressAlert").innerHTML =alertMessage;
    }

    if(form.state.value == ""){
        document.getElementById("stateAlert").innerHTML =alertMessage;
    }

    if(document.getElementById("pass").value == ""){
        document.getElementById("passAlert").innerHTML =alertMessage;
    }

    if(document.getElementById("rePassword").value == ""){
        document.getElementById("rePasswordAlert").innerHTML = alertMessage + " OR MISMATCH";
    }


    if(document.getElementById("age").value == ""){
        document.getElementById("ageAlert").innerHTML = alertMessage;
    }

    if(document.getElementById("phoneNumber").value == ""){
        document.getElementById("phoneNumberAlert").innerHTML =alertMessage;
    }

    
    

}