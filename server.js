'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//middleware need this to serve any static files in a public directory
// anything served in ./public can serve public files
// any express that is to /public we can now serve and send back the static file
app.use(express.static('./public'));
// localhost:3000/index.html

app.get('/api/codefellows', (req, res) => {
    res.json({ company: 'codefellows', courses: [201, 301, 401] });
});

app.get('/api/resource', (req, res) => {
    console.log('req', req, 'res', res);
    res.status(200).send('you just made a request');
});

app.listen(PORT, () => {
    console.log('currently listening on port 3000');
});