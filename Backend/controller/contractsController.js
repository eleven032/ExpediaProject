const getContactList = require('../model/contactsModel');

const getContacts = async (req, res) => {
  const { pageNumber, rowsPerPage } = req.query;

  try {
    const contactList = await getContactList(pageNumber, rowsPerPage);
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
