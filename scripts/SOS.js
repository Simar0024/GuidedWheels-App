function sendMessage() {

  fetch('http://localhost:3000/send-message', {
    method: 'POST',
    mode:"cors",
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => alert(`Error: ${error.message}`));
}

function makeCall() {

  fetch('http://localhost:3000/make-call', {
    method: 'POST',
    mode:"cors",
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => alert(`Error: ${error.message}`));
}

document.querySelector('.js-message-btn').addEventListener('click',()=> {
  sendMessage();
});

document.querySelector('.js-call-btn').addEventListener('click',()=>{
  makeCall();
});