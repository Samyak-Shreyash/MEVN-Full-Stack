const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//MiddleWare

app.use(bodyParser.json());
app.use(cors());

const port = process.env.port || 3000;

app.listen((port), () => console.log('Server Listening to Port ' + port));