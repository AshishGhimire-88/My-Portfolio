const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

// Show popup after submit
form.addEventListener("submit", function () {
    setTimeout(() => {
        popup.style.display = "flex";
    }, 500); // small delay for form submission
});

// Close popup
function closePopup() {
    popup.style.display = "none";
}