const regBtn = document.getElementById("reg-button");

regBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("user-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirm-password").value;

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all the fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    console.log(password);
});