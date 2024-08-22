document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch(
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSevYb4oT0LQ7lziWY3tuXEj7pBI4Pp2TZZQXyZUVLCW6N6Ayw/formResponse",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((response) => {
            if (response.ok) {
              this.reset();
              alert("Message sent successfully!");
            } else {
              throw new Error("Network response was not ok");
            }
          })
          .catch((error) => {
            console.error(
              "There was a problem with your fetch operation:",
              error
            );
            alert("Message sent successfully!");
            this.reset();
          });
      });
  });