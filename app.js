
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


// BONUS 2
// Check multiple CSS selectors for the word "happy".

function checkHappy(selectors) {

    for (let i = 0; i < selectors.length; i++) {

        let elements = document.querySelectorAll(selectors[i]);

        for (let j = 0; j < elements.length; j++) {

            if (elements[j].innerHTML.includes("happy")) {

                elements[j].insertAdjacentHTML(
                    "afterend",
                    "<p>happy tag above</p>"
                );

            }
        }
    }
}

// Array of CSS selectors.
let selectors = [".comment", ".message"];

// Call the function.
checkHappy(selectors);


// BONUS 3
// Create an array of student profile objects.

let students = [
    {
        username: "Anna",
        bio: "Golly, I love JavaScript!",
        profile_image_url: "https://placehold.co/100x100"
    },
    {
        username: "John",
        bio: "Darn, coding is challenging!",
        profile_image_url: "https://placehold.co/100x100"
    },
    {
        username: "Maria",
        bio: "Frick, I made a mistake!",
        profile_image_url: "https://placehold.co/100x100"
    }
];

// Select the empty profiles div.
let profiles = document.getElementById("profiles");

// Loop through each student.
for (let i = 0; i < students.length; i++) {

    // Replace all banned words with *.
    let cleanBio = students[i].bio.replace(
        /frick|darn|golly/gi,
        "*"
    );

    // Create a profile container.
    let profile = document.createElement("div");

    // Create the username heading.
    let name = document.createElement("h3");
    name.innerText = students[i].username;

    // Create the profile image.
    let image = document.createElement("img");
    image.src = students[i].profile_image_url;
    image.alt = students[i].username;
    image.width = 100;

    // Create the bio paragraph.
    let bio = document.createElement("p");
    bio.innerText = cleanBio;

    // Add elements to the profile container.
    profile.appendChild(name);
    profile.appendChild(image);
    profile.appendChild(bio);

    // Add the profile to the webpage.
    profiles.appendChild(profile);
}
