// Internal lib dependencies
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route');
// Variable definitions
const app = express();
const port = 3000;

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(route);

app.get('/', (req, res) => res.status(200).send('Home page of project'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
