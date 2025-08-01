document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const firstName = document.querySelector(".First-name").value.trim();
      const lastName = document.querySelector(".Last-name").value.trim();
      const email = document.querySelector(".email").value.trim();
      const subject = document.querySelector(".subject").value.trim();
      const message = document.querySelector(".txt-message").value.trim();
      const terms = document.querySelector(".termscondition").checked;
  
      // Validate fields
      if (firstName === "") {
        alert("First name is required.");
        return;
      }
  
      if (lastName === "") {
        alert("Last name is required.");
        return;
      }
  
      if (email === "") {
        alert("Email is required.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (subject === "") {
        alert("Subject is required.");
        return;
      }
  
      if (message === "") {
        alert("Message is required.");
        return;
      }
  
      if (!terms) {
        alert("You must agree to the terms.");
        return;
      }
  
      alert("Form submitted successfully!");
      form.reset();
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  