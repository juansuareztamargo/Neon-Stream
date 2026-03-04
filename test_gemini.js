
const https = require('https');

const apiKey = "YOUR_API_KEY";
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

const payload = {
    contents: [{ parts: [{ text: "Hello" }] }],
    // Intentionally using camelCase to see if it fails, then I will try snake_case
    generationConfig: {
        responseMimeType: "application/json"
    }
};

const options = {
    method: 'POST',
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

req.write(JSON.stringify(payload));
req.end();
