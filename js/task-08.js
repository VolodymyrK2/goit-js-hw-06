const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    const result = {
        email: email.value.trim(),
        password: password.value.trim()
    }
        if (result.email === "" || result.password === "") {
        alert("Please fill in all fields!");
    } else {
            console.log(result);
            event.currentTarget.reset();
    }
}

