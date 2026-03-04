
const https = require('https');

const apiKey = "YOUR_API_KEY";
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = https.request(url, options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        console.log(`Body: ${data}`);
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
