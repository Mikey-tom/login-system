document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        document.getElementById('error-message').innerText = 'Please fill in all fields.';
        return;
    }

    // Send login request to the backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard'; // Redirect on success
        } else {
            document.getElementById('error-message').innerText = 'Invalid email or password.';
        }
    })
    .catch(error => {
        document.getElementById('error-message').innerText = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
});
