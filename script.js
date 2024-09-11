const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progress');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    progressBar.style.width = `${strength}%`;
    
    if (strength >= 90) {
        strengthText.textContent = 'Password strength: very strong';
        progressBar.style.backgroundColor = '#28a745'; /* Green for very strong */
    } else if (strength >= 60) {
        strengthText.textContent = 'Password strength: strong';
        progressBar.style.backgroundColor = '#ffc107'; /* Yellow for strong */
    } else if (strength >= 30) {
        strengthText.textContent = 'Password strength: medium';
        progressBar.style.backgroundColor = '#fd7e14'; /* Orange for medium */
    } else {
        strengthText.textContent = 'Password strength: weak';
        progressBar.style.backgroundColor = '#dc3545'; /* Red for weak */
    }
});

function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 12) {
        strength += 25;
    }
    if (/[A-Z]/.test(password)) {
        strength += 25;
    }
    if (/[a-z]/.test(password)) {
        strength += 25;
    }
    if (/[0-9]/.test(password)) {
        strength += 25;
    }
    return strength;
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}