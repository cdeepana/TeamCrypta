
require('dotenv').config();

const express = require('express');
const app = express();
const needle = require('needle');
// The code below sets the bearer token from your environment variables
// To set environment variables on Mac OS X, run the export command below from the terminal: 
// export BEARER_TOKEN='YOUR-TOKEN'

const endpointUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=treasonstickers'

const token = process.env.BEARER_TOKEN
async function getRequest() {

    // Edit query parameters below
    const params = {
        'screen_name': 'Chathur19440778',
        'count': 5 
    } 

    const res = await needle('get', endpointUrl, params, { headers: {
        "Authorization": `Bearer ${token}`
    }})

    if(res.body) {
        return res.body;
    } else {
        throw new Error ('Unsuccessful request')
    }
}

(async () => {
    console.log("ffffdfd",process.env.BEARER_TOKEN);
    try {
        // Make request
        const response = await getRequest();
        // console.log(JSON.stringify(response))
        console.log(response)

    } catch(e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
  })();


  
app.listen(4000, ()=> {
    console.log(`server  listen port 4000`);
});