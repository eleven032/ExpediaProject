// Internal lib dependencies
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route');
const cors = require('cors');

// Variable definitions
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(route);

app.get('/', (req, res) => res.status(200).send('Home page of project'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
