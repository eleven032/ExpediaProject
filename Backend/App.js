// Internal lib dependencies
import express from 'express';
import { urlencoded } from 'body-parser';

// Variable definitions
const app = express();
const port = 3000;

// app.use(bodyParser.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => res.status(200).send('Home page of project'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

