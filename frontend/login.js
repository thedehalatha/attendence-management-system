const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(password);

    if (email === "" || password === "") {
        alert("Please enter the required fields");
    }
});