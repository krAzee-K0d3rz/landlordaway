console.log('KrAzee K0d3rz are for realz');

require('dotenv').config();

const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_TOKEN;
console.log(`accountSid is ${accountSid}`)
console.log(`token is ${authToken}`)


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));


// wrap this in a function
client.messages.create({
    body: 'KrAzee K0d3rz be KrAzee',
    to: '+12025496087',  // Text this number
    from: '+12402610612' // From our Twilio number
})
.then((message) => console.log(message.sid));


/*app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
*/
