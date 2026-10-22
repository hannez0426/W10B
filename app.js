
// 1. querySelector()
// Selects the FIRST element matching the CSS selector.
// Change the heading's style.

let title = document.querySelector("#title");

title.style.color = "blue";
title.style.textAlign = "center";


// 2. querySelectorAll()
// Selects ALL elements with the class "message".
// Change the text inside each paragraph.

let messages = document.querySelectorAll(".message");

for (let i = 0; i < messages.length; i++) {
    messages[i].innerText = "Welcome to JavaScript DOM!";
}


// 3. getElementById()
// Selects one element using its ID.
// Insert a new nested tag inside the div.

let studentInfo = document.getElementById("student-info");

studentInfo.insertAdjacentHTML(
    "beforeend",
    "<p>Course: Web Development</p>"
);


// 4. getElementsByClassName()
// Selects ALL elements with the class "comment".
// Insert a new tag BEFORE each comment.

let comments = document.getElementsByClassName("comment");

for (let i = 0; i < comments.length; i++) {
    comments[i].insertAdjacentHTML(
        "beforebegin",
        "<h4>Student Comment:</h4>"
    );
}


// BONUS 1
// Replace short HTML content with "NOT ENOUGH".

function checkLength(selector) {

    let elements = document.querySelectorAll(selector);

    for (let i = 0; i < elements.length; i++) {

        if (elements[i].innerHTML.length < 30) {
            elements[i].innerHTML = "NOT ENOUGH";
        }

    }
}

// Call the function.
checkLength(".subtitle");