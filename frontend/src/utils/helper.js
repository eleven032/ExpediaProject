import moment from 'moment';

const ageCalculate = (birthDate) => {
  return moment().diff(moment(birthDate, 'YYYY'), 'years');
};

export { ageCalculate };
