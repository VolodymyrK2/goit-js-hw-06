const textInputEl = document.querySelector('#validation-input');
textInputEl.addEventListener('blur', (event) => {
  const inputString = event.currentTarget.value.trim();
  textInputEl.classList.add("invalid");
  textInputEl.classList.remove("valid");
    if (inputString.length == textInputEl.dataset.length) {
       textInputEl.classList.replace("invalid","valid");
         } else {
      };
})