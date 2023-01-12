const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login_button')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add('span-active')
}

const handleFocusout = ({ target }) => {
    if(target.value !== "") return

    const span = target.previousElementSibling
    span.classList.remove('span-active')
}

const handleChange = () => {
    const [username, password] = inputs;
    if(username.value && password.value.length >= 8) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute("disabled", "")
    }

}

inputs.forEach(e => e.addEventListener('focus', handleFocus))
inputs.forEach(e => e.addEventListener('focusout', handleFocusout))
inputs.forEach(e => e.addEventListener('input', handleChange))