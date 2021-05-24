import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TAGS_LOADED,
  UI_RESET_ERROR,
} from './types';

export const initialState = {
  auth: false,
  adverts: {
    loaded: false,
    data: [],
  },
  tags: [],
  ui: {
    loading: false,
    error: null,
  },
};

export function auth(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export const adverts = (state = initialState.adverts) => state;

export const tags = (state = initialState.tags, action) =>
  action.type === TAGS_LOADED ? action.payload : state;

export function ui(state = initialState.ui, action) {
  if (action.error) {
    return { ...state, loading: false, error: action.payload };
  }
  if (/_REQUEST$/.test(action.type)) {
    return { ...state, loading: true, error: null };
  }
  if (/_SUCCESS$/.test(action.type)) {
    return { ...state, loading: false, error: null };
  }

  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null };
  }
  return state;
}
