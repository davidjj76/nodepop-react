import {
  getAdvertDetail,
  getAreAdvertsLoaded,
  getAreTagsLoaded,
} from './selectors';
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  ADVERTS_CREATED_REQUEST,
  ADVERTS_CREATED_SUCCESS,
  ADVERTS_CREATED_FAILURE,
  ADVERTS_DETAIL_REQUEST,
  ADVERTS_DETAIL_SUCCESS,
  ADVERTS_DETAIL_FAILURE,
  ADVERTS_DELETED_REQUEST,
  ADVERTS_DELETED_SUCCESS,
  ADVERTS_DELETED_FAILURE,
  TAGS_LOADED,
  UI_RESET_ERROR,
} from './types';

const createRequestAction = type => () => ({
  type,
});

const createSuccessAction = type => payload => ({
  type,
  payload,
});

const createFailureAction = type => payload => ({
  type,
  payload,
  error: true,
});

export const authLoginRequest = createRequestAction(AUTH_LOGIN_REQUEST);
export const authLoginSuccess = createSuccessAction(AUTH_LOGIN_SUCCESS);
export const authLoginFailure = createFailureAction(AUTH_LOGIN_FAILURE);

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

export const advertsLoadedRequest = createRequestAction(ADVERTS_LOADED_REQUEST);
export const advertsLoadedSuccess = createSuccessAction(ADVERTS_LOADED_SUCCESS);
export const advertsLoadedFailure = createFailureAction(ADVERTS_LOADED_FAILURE);

export const advertsLoadAction = () => {
  return async function (dispatch, getState, { api }) {
    const advertsLoaded = getAreAdvertsLoaded(getState());
    if (advertsLoaded) {
      return;
    }

    dispatch(advertsLoadedRequest());
    try {
      const adverts = await api.adverts.getAdverts();
      dispatch(advertsLoadedSuccess(adverts));
      return adverts;
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
    }
  };
};

export const advertsCreatedRequest = createRequestAction(
  ADVERTS_CREATED_REQUEST,
);
export const advertsCreatedSuccess = createSuccessAction(
  ADVERTS_CREATED_SUCCESS,
);
export const advertsCreatedFailure = createFailureAction(
  ADVERTS_CREATED_FAILURE,
);

export const advertsCreateAction = newAdvert => {
  return async function (dispatch, _getState, { api, history }) {
    dispatch(advertsCreatedRequest());
    try {
      const advert = await api.adverts.createAdvert(newAdvert);
      dispatch(advertsCreatedSuccess(advert));
      history.push(`/adverts/${advert.id}`);
      return advert;
    } catch (error) {
      dispatch(advertsCreatedFailure(error));
    }
  };
};

export const advertsDetailRequest = createRequestAction(ADVERTS_DETAIL_REQUEST);
export const advertsDetailSuccess = createSuccessAction(ADVERTS_DETAIL_SUCCESS);
export const advertsDetailFailure = createFailureAction(ADVERTS_DETAIL_FAILURE);

export const advertsDetailAction = advertId => {
  return async function (dispatch, getState, { api }) {
    const advertLoaded = getAdvertDetail(getState(), advertId);
    if (advertLoaded) {
      return;
    }

    dispatch(advertsDetailRequest());
    try {
      const advert = await api.adverts.getAdvert(advertId);
      dispatch(advertsDetailSuccess(advert));
      return advert;
    } catch (error) {
      dispatch(advertsDetailFailure(error));
    }
  };
};

export const advertsDeletedRequest = createRequestAction(
  ADVERTS_DELETED_REQUEST,
);
export const advertsDeletedSuccess = createSuccessAction(
  ADVERTS_DELETED_SUCCESS,
);
export const advertsDeletedFailure = createFailureAction(
  ADVERTS_DELETED_FAILURE,
);

export const advertsDeleteAction = advertId => {
  return async function (dispatch, _getState, { api, history }) {
    dispatch(advertsDeletedRequest());
    try {
      await api.adverts.deleteAdvert(advertId);
      dispatch(advertsDeletedSuccess(advertId));
      history.push('/');
    } catch (error) {
      dispatch(advertsDeletedFailure(error));
    }
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
