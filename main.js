console.log(`21 01 19 JS DOM Events Primary`);

// select form fields
let guestName = document.querySelector("#guestName");
let guestEmail = document.querySelector("#guestEmail");
let isGuestAttending = document.querySelector("#isGuestAttending");
// console.log(guestName);console.log(guestEmail);console.log(isGuestAttending);
// select fom submit button
let submitRSVP = document.querySelector("#submitRSVP");
// console.log(submitRSVP);

// select accepted invitations elements
let acceptedInvitations = document.querySelector("#acceptedInvitations");
let clearAccepted = document.querySelector("#clearAccepted");
// console.log(acceptedInvitations);console.log(clearAccepted);

// select declined invitations elements
let declinedInvitations = document.querySelector("#declinedInvitations");
let clearDeclined = document.querySelector("#clearDeclined");
// console.log(declinedInvitations);console.log(clearDeclined);

// function to handle form submission
respond = (event) => {
    event.preventDefault(); // stop page from reloading
    // console.log(guestName.value);
    // console.log(guestEmail.value);
    // console.log(isGuestAttending.checked);
    if(isGuestAttending.checked){
        acceptedInvitations.innerHTML += `<div>${guestName.value} : ${guestEmail.value}</div>`
        clearAccepted.removeAttribute("hidden");
    } else {
        declinedInvitations.innerHTML += `<div>${guestName.value} : ${guestEmail.value}</div>`
        clearDeclined.removeAttribute("hidden");
    }

    guestEmail.value = "";
    guestName.value = "";
    isGuestAttending.checked = false;
}

clearAcceptedInvitations = () => {
    // console.log("Clear accepted");
    acceptedInvitations.innerHTML = "";
    clearAccepted.setAttribute("hidden", "");
}
clearDeclinedInvitations = () => {
    // console.log("Clear declined");
    declinedInvitations.innerHTML = "";
    clearDeclined.setAttribute("hidden", "");
}

// when submit button is clicked handel form submission
submitRSVP.addEventListener("click", respond);
// when clear buttons are clicked, clear appropriate elements
clearAccepted.addEventListener("click", clearAcceptedInvitations);
clearDeclined.addEventListener("click", clearDeclinedInvitations);
