import { userLoginInput } from './user.js';
const details = JSON.parse(localStorage.getItem('user')) || [];
const displayContent = document.querySelector('.displayContent');

document.querySelector('.js-login-btn').addEventListener('click',()=>{

    const user = userLoginInput();
    if (user.userEmail === '' ||  user.userPassword === '')
        alert('Enter the credentials');
    else{
        if(details.length === 0)
            displayContent.innerHTML = `User not registered! <span class="sign-up-link"><a href = "../structure/Signup-Page.html">Register here</a></span>`;
        else{
        const enteredPassword = document.querySelector('.password-input').value;
        const enteredEmail = document.querySelector('.email-address').value;
        
        details.forEach(element => {

        let userId = element.id;
        if(userId === '')
            userId = 101;
        else
            userId++;

        const storedEmail = element.emailAddress; 
        const storedPassword = element.userPassword;

        if(enteredPassword === storedPassword && enteredEmail === storedEmail){
            displayContent.textContent = 'Password & Email Correct! Welcome';
            let html = '<a href="../structure/Dashboard.html">Login</a>';
            document.querySelector('.js-login-btn').innerHTML = html;
        }
        else if(enteredPassword !== storedPassword && enteredEmail === storedEmail || enteredEmail !== storedEmail &&           enteredPassword === storedPassword)
        {
            displayContent.textContent = 'Password or Email is Incorrect! Try Again';
        }
        else
        {
            displayContent.innerHTML = `User not registered! <span class="sign-up-link"><a href = "../structure/Signup-Page.html">Register here</a></span>`;
        }
        });
    }       
    }    
});