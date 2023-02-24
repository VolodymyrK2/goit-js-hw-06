const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Please fill in all fields!");
    } else {
        const result = {
        email: email.value,
        password: password.value
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
        event.currentTarget.reset();
        return result;
    }
}

