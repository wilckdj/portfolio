import * as tools from './form.js';

tools.form.addEventListener('submit', (e) => {
    let messages = []
    if (tools.username.value === '' || tools.username.value == null) {
        messages.push('Name is required')
    }
    if (tools.password.value.length < 6 || tools.password.value.length >= 20) {
        messages.push('Password must be between 6 and 20 characters')
    }
    if (tools.password.value === 'password') {
        messages.push('Password cannot be password')
    }
    if (tools.password.value != tools.passConfirm.value) {
        messages.push('The passwords typed were not the same')
    }

    if (messages.length > 0) {
        e.preventDefault()
        tools.errorElement.innerText = messages.join(', ');
    }

})