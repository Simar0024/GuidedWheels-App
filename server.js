const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const accountSID = process.env.Twilio_SID;
const authToken = process.env.Auth_Token;
const fromNumber = process.env.From_Number;
const toNumber = process.env.To_Number;

const client = require('twilio')(accountSID, authToken);

app.post('/send-message', (req, res) => {

  client.messages.create({
    body: 'Hello User ! This is an alert message from GuidedWheels',
    from: fromNumber,
    to: toNumber
  })
  .then(message => res.status(200).send(`Message sent successfully`))
  .catch(error => res.status(500).send(`Error sending message: ${error.message}`));
});

app.post('/make-call', (req, res) => {

  client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: toNumber,
      from: fromNumber,
    })
  .then(message => res.status(200).send(`Call placed successfully`))
  .catch(error => res.status(500).send(`Error making call: ${error.message}`));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});