import openSocket from 'socket.io-client';

export const socket = openSocket('http://localhost:3001');

export const serverTypesEvent = [
  'SEND_MESSAGE',
  'VALIDATION_ERROR_MESSAGE',
  'GET_ALL_MESSAGES',
  'SIGN_IN',
  'VALIDATION_ERROR_USERNAME',
  'INVALIDATE_USER'
]
