const express = require('express');
const cors = require('cors');

const fs = require('fs');
const gphoto2 = require('gphoto2');
const GPhoto = new gphoto2.GPhoto2();

GPhoto.setLogLevel(1);
GPhoto.on('log', function (level, domain, message) {
    console.log(domain, message);
});

const app = express();
const port = 43921;

app.use(cors());
app.use(express.json());

app.get('/take-photo', (req, res) => {
    console.log('test');
    req.status(200).json({message: "done"});
});

app.listen(port, () => {
    console.log('Listening to Port: ' + port);
})