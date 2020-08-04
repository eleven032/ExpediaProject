const express = require('express');
const router = express.Router();

const contactsController = require('../../controller/contractsController');

router.get('/', contactsController.getContacts);

module.exports = router;
