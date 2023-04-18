// When the page is fully loaded
window.onload = function() {
  // Add a click event listener to the "Contact Me" button
  document.getElementById("contact-button").addEventListener("click", function() {
    // Retrieve the form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postalCode = document.getElementById("postal-code").value;
    var message = document.getElementById("message").value;
    
    // Construct the email body text
    var body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Address: " + address + "\n";
    body += "City: " + city + "\n";
    body += "Postal Code: " + postalCode + "\n";
    body += "Message: " + message + "\n";
    
    // Encode the email body text for use in a URL
    var encodedBody = encodeURIComponent(body);
    
    // Construct the mailto URL with the encoded email body text
    var mailtoUrl = "mailto:Kritika101223@gmail.com?subject=Website Inquiry&body=" + encodedBody;
    
    // Open the user's default email client with the mailto URL
    window.location.href = mailtoUrl;
  });
};
