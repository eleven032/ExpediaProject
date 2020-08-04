const query = require('../db/query');

const getContactList = () => query(
  `SELECT A.*, B.count 
  FROM expedia.contact as A
  JOIN 
  (SELECT UserID, COUNT(UserID) as count FROM expedia.contactdetail group by UserID) AS B
  ON A.UserID = B.UserID;
`);

module.exports = getContactList;
