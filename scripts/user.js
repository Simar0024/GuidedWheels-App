export function userInput(){
    let user = {    
        firstName : document.querySelector('.f-name').value,
        lastName : document.querySelector('.l-name').value,
        emailAddress : document.querySelector('.email-address').value,
        userPassword : document.querySelector('.my-password').value,
        id : ''
    }
    return user;
}

export function userLoginInput(){
    let user = {
        userEmail : document.querySelector('.email-address').value,
        userPassword: document.querySelector('.password-input').value,
        id : ''
    }
    return user;
}