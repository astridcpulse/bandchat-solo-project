import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Please enter your Username and Password';
    case 'LOGIN_FAILED':
      return "Ope! Username and password didn't match... try again!";
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Sorry, something went wrong! Maybe the server?🤖' ;
    default:
      return state;
  }
};

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose a (cool) username and password please 🙂';
    case 'REGISTRATION_FAILED':
      return "Ope 😩! That Username might be taken, try something cool and new!";
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  loginMessage,
  registrationMessage,
});
