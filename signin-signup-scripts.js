function login() {
    const username = document.getElementById("unique-username").value;
    const password = document.getElementById("unique-password").value;

    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return;
    }

    window.location.href = "index.html";
}

function signup() {
    const fullname = document.getElementById("unique-fullname").value;
    const email = document.getElementById("unique-email").value;
    const phone = document.getElementById("unique-phone").value;
    const password = document.getElementById("unique-password").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (fullname === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all the fields.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    window.location.href = "index.html";
}
