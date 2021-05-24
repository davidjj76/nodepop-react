import { getAreTagsLoaded } from './selectors';
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  TAGS_LOADED,
  UI_RESET_ERROR,
} from './types';

export const authLoginRequest = () => {
  return {
    type: AUTH_LOGIN_REQUEST,
  };
};

export const authLoginSuccess = () => {
  return {
    type: AUTH_LOGIN_SUCCESS,
  };
};

export const authLoginFailure = error => {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload: error,
    error: true,
  };
};

export const loginAction = credentials => {
  return async function (dispatch, _getState, { api, history }) {
    dispatch(authLoginRequest());
    try {
      await api.auth.login(credentials);
      dispatch(authLoginSuccess());
      // Redirect
      const { from } = history.location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
  };
};

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const logoutAction = () => {
  return async function (dispatch, _getState, { api }) {
    await api.auth.logout();
    dispatch(authLogout());
  };
};

export const tagsLoaded = tags => {
  return {
    type: TAGS_LOADED,
    payload: tags,
  };
};

export const tagsLoadAction = () => {
  return async function (dispatch, getState, { api }) {
    if (getAreTagsLoaded(getState())) {
      return;
    }
    const tags = await api.adverts.getTags();
    dispatch(tagsLoaded(tags));
    return tags;
  };
};

export const resetError = () => {
  return {
    type: UI_RESET_ERROR,
  };
};
