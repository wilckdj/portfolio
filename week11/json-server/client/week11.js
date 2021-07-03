import Auth from "./auth.js";

import {
    Errors,
    makeRequest
} from "./authHelpers.js";

const errorObj = new Errors('errors');
const authObj = new Auth(errorObj);

const loginForm = document.getElementById('login');
loginForm.querySelector('#subButton').addEventListener('click', () => {
    authObj.login(getPosts);
});

async function getPosts() {
    try {
        const data = await makeRequest('posts', 'GET', null, authObj.token);
        
        document.getElementById('content').classList.remove('hidden');
        // console.log(data);
        let ul = document.getElementById('list');
        ul.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            let ul2 = document.createElement('ul');
            let li2 = document.createElement('li');
            li.appendChild(document.createTextNode(data[i].title));
            li2.appendChild(document.createTextNode(data[i].content));
            ul2.appendChild(li2);
            li.appendChild(ul2);
            ul.appendChild(li);
        }
        errorObj.clearError();
    } catch (error) {
        errorObj.handleError(error);
    }
}

document.getElementById("createSubmit").addEventListener('click', () => {
    createPost();
});

async function createPost() {
    const form = document.forms.postForm;
    // console.dir(form);
    if (form.title.validity.valid && form.content.validity.valid) {
        errorObj.clearError();
        const data = {
            title: form.title.value,
            content: form.content.value
        };
        try {
            const res = await makeRequest('posts', 'POST', data, authObj.token);
            console.log('Post create:', data);
            form.title.value = '';
            form.content.value = '';
            getPosts();
        } catch (error) {
            errorObj.handleError(error);
        }
    } else {
        errorObj.displayError({message: 'Title and Content are required'});
    }
}