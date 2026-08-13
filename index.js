// =================================
// NAV TOGGLE
// =================================

const navToggle = document.querySelector(".nav_toggle");
const nav = document.querySelector("nav");

// Open / close menu
navToggle.addEventListener("click", function () {
    nav.classList.toggle("nav_open");
});


// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav_link .link a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("nav_open");
    });

});


// =================================
// PROJECT FORM POPUP
// =================================

const projectModal = document.getElementById("projectModal");
const openProjectForm = document.getElementById("openProjectForm");
const getStartedBtn = document.getElementById("getStartedBtn");
const closeProjectForm = document.getElementById("closeProjectForm");
const projectOverlay = document.querySelector(".project_overlay");
const projectForm = document.getElementById("projectForm");


// Open popup
openProjectForm.addEventListener("click", function () {
    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
});

getStartedBtn.addEventListener("click", function () {
    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
});


// Close popup
closeProjectForm.addEventListener("click", function () {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
});


// Close when clicking outside the card
projectOverlay.addEventListener("click", function () {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
});


// Submit form
projectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form information
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const projectType = document.getElementById("projectType").value;
    const message = document.getElementById("message").value;


    // Create WhatsApp message
    const whatsappMessage =
`****8NEW PROJECT REQUEST****
 Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}
Project Description:
${message}

----------------------
Sent to Husky Studio Website`;


    // Encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);


    // Your WhatsApp number
    const whatsappNumber = "255697607376";


    // WhatsApp URL
    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // Open WhatsApp
    window.open(whatsappURL, "_blank");


    // Reset form
    projectForm.reset();


    // Close popup
    projectModal.classList.remove("active");
    document.body.style.overflow = "";

});