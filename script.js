console.log("✅ JavaScript Loaded Successfully!");

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjusted for fixed navbar
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in navbar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

const facts = [
    "I have four kids.",
    "I listen to podcasts and audiobooks at 2.0x speed.",
    "I have ten siblings.",
    "I don't like donuts.",
    "My Dad is dead.",
    "I grew up in Southern CA.",
    "I'm fluent in Gen Z Slang.",
    "I've never broken a bone.",
    "I hate running.",
    "I don't eat breakfast.",
    "I love love love coffee."
];

const images = [
    "randomfactphoto.jpg",
    "randomfactphoto.jpg",
    "randomfactphoto.jpg",
    "randomfactphoto.jpg",
    "randomfactphoto.jpg",
    "randomfactphoto.jpg",
    "randomfactphoto.jpg", 
    "randomfactphoto.jpg",
    "randomfactphoto.jpg",
    "randomfactphoto.jpg",
    "randomfactphoto.jpg"
];

let currentIndex = 0;

function nextFact() {
    currentIndex = (currentIndex + 1) % facts.length; // Loop back to start after last fact

    document.getElementById("carousel-image").src = images[currentIndex];
    document.getElementById("carousel-fact").textContent = facts[currentIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("email-popup");
    const closePopup = document.getElementById("close-popup");
    const emailForm = document.getElementById("email-form");

    // Show popup after 3 seconds if user has not subscribed before
    setTimeout(() => {
        if (!localStorage.getItem("emailCaptured")) {
            popup.classList.add("show-popup");
        }
    }, 3000);

    // Close popup when button is clicked
    closePopup.addEventListener("click", function () {
        popup.classList.remove("show-popup");
    });

    // Handle email signup form submission
    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email-input").value;

        fetch(emailForm.action, {
            method: "POST",
            body: new FormData(emailForm),
            headers: { "Accept": "application/json" }
        }).then(response => {
            if (response.ok) {
                localStorage.setItem("emailCaptured", "true");
                popup.classList.remove("show-popup");
                console.log("Email submitted:", email);
            } else {
                console.error("Error submitting email");
            }
        });
    });
});
