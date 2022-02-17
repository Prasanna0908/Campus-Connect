import { login, signup } from '../util/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const loginRequest = { type: LOGIN_REQUEST };
const loginSuccess = token => ({ type: LOGIN_SUCCESS, token });
const loginError = error => ({ type: LOGIN_ERROR, error });

export const attemptLogin = (username, password, Email) => async dispatch => {
  console.log(username,Email)
  dispatch(loginRequest);
  try {
    const token = await login(username, password, Email);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

const signupRequest = { type: SIGNUP_REQUEST };
const signupSuccess = token => ({ type: SIGNUP_SUCCESS, token });
const signupError = error => ({ type: SIGNUP_ERROR, error });

export const attemptSignup = (username, password, Email,history ) => async dispatch => {
  console.log(username, Email,"ggh")
  dispatch(signupRequest);
  try {
    const token = await signup(username, password, Email);
    history.push("/login")
    dispatch(signupSuccess(token));
  } catch (error) {
    dispatch(signupError(error));
  }
};

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });
