export const initialState = {
  auth: false,
  adverts: {
    loaded: false,
    data: [],
  },
  ui: {
    loading: false,
    error: null,
  },
};

export const auth = (state = initialState.auth) => state;

export const adverts = (state = initialState.adverts) => state;

export const ui = (state = initialState.ui) => state;
