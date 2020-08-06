const query = require('../db/query');

const getContactList = (pageNumber = 0, rowsPerPage = 5) => {
  const limitStart = rowsPerPage * pageNumber;
  const limitEnd = limitStart + Number(rowsPerPage);
  return query(
    `SELECT A.*, B.count 
    FROM expedia.contact as A
    JOIN 
    (SELECT UserID, COUNT(UserID) as count FROM expedia.contactdetail group by UserID) AS B
    ON A.UserID = B.UserID limit ${limitStart},${limitEnd};`
  )
};

module.exports = getContactList;
