var scriptURL = "https://script.google.com/macros/s/AKfycbwAvMDfO4e6kkY_lpG-Zej_QsiHmJpjEGuWt1W89VSj/dev";

document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }, // Fix content type
    body: new URLSearchParams({ "email": email }) // Send as form data
  })
  .then(response => response.text())
  .then(data => {
    console.log("Server Response:", data);
    document.getElementById("response-message").innerText = "Thank you for subscribing!";
    document.getElementById("newsletter-form").reset();
  })
  .catch(error => console.error("Error:", error));
});

