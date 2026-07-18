// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (scrollBtn) {
        scrollBtn.style.display =
            window.scrollY > 300 ? "block" : "none";
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Typing Effect
const text = [
    "AWS DevOps Engineer",
    "Terraform Specialist",
    "Docker & Kubernetes",
    "Cloud Automation Expert",
    "CI/CD Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length)
        count = 0;

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    const typingElement = document.getElementById("typing");
    if (typingElement) {
        typingElement.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            type();

        }, 1800);

    } else {

        setTimeout(type, 90);

    }

})();