const passwordField = document.querySelector('.form .field input[type="password"]'),
    toggleBtn = document.querySelector(".form .field i");




// Add a descriptive function name for the event handler.
function togglePasswordVisibility() {
    // Check if the password field is hidden.
    if (passwordField.type === 'password') {
        // Show the password.
        passwordField.type = 'text';
        // Toggle the toggle button icon.
        toggleBtn.classList.toggle('fa-eye-slash');
    } else {
        // Hide the password.
        passwordField.type = 'password';
        // Toggle the toggle button icon.
        toggleBtn.classList.toggle('fa-eye-slash');
    }
}

// Add an event listener to the toggle button.
toggleBtn.addEventListener('click', togglePasswordVisibility);