import moment from 'moment';

const formatYear = (date) => moment(date, 'yyyy-mm-dd').get('year');

const DateFormatters = {
  formatYear,
};

export default DateFormatters;
