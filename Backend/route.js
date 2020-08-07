const express = require('express');
const router = express.Router();

const contacts = require('./routes/contacts/Contacts');

router.use('/contacts', contacts);

module.exports = router;
