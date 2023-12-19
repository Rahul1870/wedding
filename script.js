function register() {
    // You can add client-side validation here before proceeding with the registration
    
        // Get form input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        // Validate input
        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields");
            return;
      
    }
    
    // Simulating a successful registration
    document.getElementById("successMessage").classList.remove("hidden");
}
