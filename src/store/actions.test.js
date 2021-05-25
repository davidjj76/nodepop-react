import {
  ADVERTS_DETAIL_FAILURE,
  ADVERTS_DETAIL_REQUEST,
  ADVERTS_DETAIL_SUCCESS,
  ADVERTS_LOADED_SUCCESS,
} from './types';
import { advertsLoadedSuccess, advertsDetailAction } from './actions';

// SYNC ACTION
describe('advertsLoadedSucces', () => {
  test('should create an ADVERTS_LOADED_SUCCESS action', () => {
    const adverts = 'adverts';
    const expectedAction = { type: ADVERTS_LOADED_SUCCESS, payload: adverts };
    expect(advertsLoadedSuccess(adverts)).toEqual(expectedAction);
  });
});

// ASYNC ACTION
describe('advertsDetailAction', () => {
  const advertId = '1';
  const thunk = advertsDetailAction(advertId);
  const dispatch = jest.fn();
  const api = {
    adverts: { getAdvert: jest.fn() },
  };
  describe('when advert exists in state', () => {
    const state = {
      adverts: {
        data: [{ id: advertId }],
      },
    };
    const getState = () => state;

    beforeEach(() => {
      thunk(dispatch, getState, { api });
    });

    test('should not dispatch any action', () => {
      expect(dispatch).not.toHaveBeenCalled();
    });

    test('should not call api', () => {
      expect(api.adverts.getAdvert).not.toHaveBeenCalled();
    });
  });

  describe('when api resolves', () => {
    const advert = 'advert';
    const state = {
      adverts: {
        data: [],
      },
    };
    const getState = () => state;

    beforeEach(() => {
      api.adverts.getAdvert.mockResolvedValue(advert);
      thunk(dispatch, getState, { api });
    });

    test('should dispatch an ADVERTS_DETAIL_REQUEST action', () => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ADVERTS_DETAIL_REQUEST,
      });
    });

    test('should call api method', () => {
      expect(api.adverts.getAdvert).toHaveBeenCalledWith(advertId);
    });

    test('should dispatch an ADVERTS_DETAIL_SUCCESS action', () => {
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ADVERTS_DETAIL_SUCCESS,
        payload: advert,
      });
    });
  });

  describe('when api rejects', () => {
    const error = 'error';
    const state = {
      adverts: {
        data: [],
      },
    };
    const getState = () => state;

    beforeEach(() => {
      api.adverts.getAdvert.mockRejectedValue(error);
      thunk(dispatch, getState, { api });
    });

    test('should dispatch an ADVERTS_DETAIL_FAILURE action', () => {
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ADVERTS_DETAIL_FAILURE,
        payload: error,
        error: true,
      });
    });
  });
});
