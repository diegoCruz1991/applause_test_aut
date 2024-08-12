const dayjs = require('dayjs');

const testData = [
  {
    "testcase_name": "NY_SYDNEY",
    "city_from": "New York",
    "city_to": "Sydney",
    "date_from": dayjs().format('YYYY-MM-DD'),
    "date_to": dayjs().add(7, 'day').format('YYYY-MM-DD'),
    "guests": 3
  },
  {
    "testcase_name": "BOSTON_AMS",
    "city_from": "Boston",
    "city_to": "Amsterdam",
    "date_from": dayjs().add(10, 'day').format('YYYY-MM-DD'),
    "date_to": dayjs().add(1, 'month').format('YYYY-MM-DD'),
    "guests": 5
  }
]

module.exports = testData;