import axios from 'axios';
import moment from 'moment';

export const BASE_URL = 'http://test.anromsocial.com';

const BIRTHDAY_EVENTS_URL = 'http://test.anromsocial.com/api/birthdays';

const formatToMs = date => moment(date, 'YYYY-MM-DD').format('MM.DD');

const sortedByName = arr =>
  arr.sort((a, b) => {
    if (a.name.split(' ')[1].toLowerCase() < b.name.split(' ')[1].toLowerCase()) return -1;
    if (a.name.split(' ')[1].toLowerCase() > b.name.split(' ')[1].toLowerCase()) return 1;
    return 0;
  });

export const getRececntBirthdayEvents = () => {
  const from = moment()
    .subtract(14, 'day')
    .format('MM.DD');

  const to = moment()
    .subtract(1, 'day')
    .format('MM.DD');

  return axios
    .get(`${BIRTHDAY_EVENTS_URL}?dateFrom=${from}&dateTo=${to}`)
    .then(({ data }) => sortedByName(data.users).sort((a, b) => formatToMs(b.birthday) - formatToMs(a.birthday)));
};

export const getCurrentBirthdayEvents = () => {
  const isLeapYear = moment().isLeapYear();
  const today = moment().format('MM.DD');

  if (!isLeapYear && today === '02.28') {
    return axios
      .get(`${BIRTHDAY_EVENTS_URL}?dateFrom=${today}&dateTo=02.29`)
      .then(({ data }) => sortedByName(data.users));
  }

  return axios
    .get(`${BIRTHDAY_EVENTS_URL}?dateFrom=${today}&dateTo=${today}`)
    .then(({ data }) => sortedByName(data.users));
};

export const getImmediateBirthdayEvents = () => {
  const from = moment()
    .subtract(-1, 'day')
    .format('MM.DD');

  const to = moment()
    .subtract(-14, 'day')
    .format('MM.DD');

  return axios
    .get(`${BIRTHDAY_EVENTS_URL}?dateFrom=${from}&dateTo=${to}`)
    .then(({ data }) => sortedByName(data.users).sort((a, b) => formatToMs(a.birthday) - formatToMs(b.birthday)));
};
