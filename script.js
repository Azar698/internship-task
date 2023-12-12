let popUp = document.getElementById("createPopup");

let signinPopup = document.getElementById("signinPopup");

let signInMobile = document.getElementById("signInMobile");

function openPopup(){
    popUp.classList.add("create-account-open");
}

function closePopup(){
    popUp.classList.remove("create-account-open");
}

function signInopen(){
    signinPopup.classList.add("create-signin-popup-open");
    popUp.classList.remove("create-account-open");
}

function closeSignInPopup(){
    popUp.classList.remove("create-account-open");
    signinPopup.classList.remove("create-signin-popup-open");
}

