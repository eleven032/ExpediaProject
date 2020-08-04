const getContactList = require('../model/contactsModel');
// import getContactList from '../model/contactsModel';
const getContacts = async (req, res) => {
  try {
    const contactList = await getContactList();
    res.status(200).send({
      status: 'SUCCESS',
      data: {
        contactList
      }
    });
  } catch (e) {
    res.status(500).send({
      status: 'error',
      message: e
    })
  }
};

module.exports = { getContacts };
