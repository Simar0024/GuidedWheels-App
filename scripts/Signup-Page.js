import { userInput } from "./user.js";

const user_details = JSON.parse(localStorage.getItem('user')) || [];
console.log(user_details);
const displaySignContent = document.querySelector('.displaySignContent');

user_details.forEach(element => {
    if(element.id === '')
        element.id = 101;
    else
        element.id++;
    console.log(element.id);
});
    
document.querySelector('.js-sign-up-btn').addEventListener('click',()=>{ 
    const user = userInput();

    if (user.firstName === '' || user.lastName === '' || user.emailAddress === '' || user.userPassword === '')
        alert('Enter the credentials');
    else{
        user_details.push(user);
        localStorage.setItem('user',JSON.stringify(user_details));
        clearInput();
    }
    displaySignContent.innerHTML = `Successfully registered! <span class="login-link"><a href = "../structure/Login-Page.html">
    Login here</a>
    </span>`;
});

function clearInput(){
    document.querySelector('.f-name').value = '';
    document.querySelector('.l-name').value = '';
    document.querySelector('.email-address').value = '';
    document.querySelector('.my-password').value = '';
}