const express = require('express');
const router = express.Router();

const contactsController = require('../../controller/contractsController');

router.get('/', contactsController.getContacts);
router.get('/detail', contactsController.getUserContactDetail);

module.exports = router;
