
const contactButton = document.getElementById("contact-button");
const contactForm = document.getElementById("contact-form");

contactButton.addEventListener("click", () => {
    contactForm.classList.toggle("show");

    if (contactForm.classList.contains("show")) {
        contactButton.textContent = "Close Form";
    } else {
        contactButton.textContent = "Contact Me";
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body =
        `Hi Lucas,\n\n` +
        `${message}\n\n` +
        `From: ${name}\n` +
        `Email: ${email}`;

    const mailto =
        `mailto:lmcculloch2007@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
});