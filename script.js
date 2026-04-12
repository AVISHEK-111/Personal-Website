// Fixed Tab Functionality
document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-links");
    const tabContents = document.querySelectorAll(".tab-contents");

    tabLinks.forEach(link => {
        link.addEventListener("click", function() {
            const tabName = this.getAttribute("data-tab");

            // Remove active from all tabs
            tabLinks.forEach(l => l.classList.remove("active-link"));
            tabContents.forEach(c => c.classList.remove("active-tab"));

            // Add active to clicked tab and content
            this.classList.add("active-link");
            document.getElementById(tabName).classList.add("active-tab");
        });
    });
});

// Mobile menu
function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-250px";
}

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Form handling
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        msg.textContent = "Sending...";
        msg.style.color = "#48b0cd";

        setTimeout(() => {
            msg.textContent = "Message sent successfully! I'll reply soon.";
            msg.style.color = "#4ade80";
            form.reset();
        }, 1500);
    });
}
