const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// contact-form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Log data to console
    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Message:", message);

    document.getElementById("contactForm").reset();
  });

// read more
function toggleDescription(event) {
  event.preventDefault();

  const card = event.target.closest(".card");
  const description = card.querySelector(".card-description");

  // Toggle visibility
  if (description.style.display === "none") {
    description.style.display = "block";
    event.target.innerText = "Show Less >";
  } else {
    description.style.display = "none";
    event.target.innerText = "Read More >";
  }
}

// about us
function toggleExtraContent() {
  const extraContent = document.querySelector(".extra-content");
  const button = document.querySelector(".hero-button");

  if (extraContent.style.display === "none") {
    extraContent.style.display = "block";
    button.innerText = "Show Less";
  } else {
    extraContent.style.display = "none";
    button.innerText = "Read More";
  }
}
