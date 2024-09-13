// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        document.getElementById('error-message').innerText = 'Please fill in all fields.';
        return;
    }
    // Add fetch API call to the backend here
    // For now, simulate a success
    document.getElementById('error-message').innerText = 'Login successful!';
});

// Handle modal opening and closing
const signupModal = document.getElementById('signupModal');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const signupLink = document.getElementById('signupLink');
const forgotPasswordLink = document.getElementById('forgotPassword');
const closeButtons = document.getElementsByClassName('close');

// Open Signup Modal
signupLink.onclick = function() {
    signupModal.style.display = 'block';
};

// Open Forgot Password Modal
forgotPasswordLink.onclick = function() {
    forgotPasswordModal.style.display = 'block';
};

// Close Modals
Array.from(closeButtons).forEach(button => {
    button.onclick = function() {
        signupModal.style.display = 'none';
        forgotPasswordModal.style.display = 'none';
    }
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPassword = document.getElementById('signupPassword').value;
    if (!signupEmail || !signupPassword) {
        alert('Please fill in all fields');
        return;
    }
    // Add your signup logic here
    alert('Signup successful!');
    signupModal.style.display = 'none';
});

// Handle Forgot Password Form Submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const forgotEmail = document.getElementById('forgotEmail').value;
    if (!forgotEmail) {
        alert('Please enter your email');
        return;
    }
    // Add forgot password logic here
    alert('Password reset email sent!');
    forgotPasswordModal.style.display = 'none';
});
