import { initialState, adverts } from './reducers';
import {
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_CREATED_SUCCESS,
  ADVERTS_DETAIL_SUCCESS,
  ADVERTS_DELETED_SUCCESS,
} from './types';

describe('adverts', () => {
  test('should return initial state', () => {
    const action = { type: 'ANY' };
    expect(adverts(undefined, action)).toBe(initialState.adverts);
  });

  test('should manage ANY action', () => {
    const action = { type: 'ANY' };
    expect(adverts(initialState.adverts, action)).toBe(initialState.adverts);
  });

  test('should manage ADVERTS_LOADED_SUCCESS action', () => {
    const payload = [{ id: '1' }];
    const action = { type: ADVERTS_LOADED_SUCCESS, payload };
    expect(adverts(initialState.adverts, action)).toMatchObject({
      loaded: true,
      data: payload,
    });
  });

  test('should manage ADVERTS_CREATED_SUCCESS action', () => {
    const payload = { id: '1' };
    const action = { type: ADVERTS_CREATED_SUCCESS, payload };
    expect(adverts(initialState.adverts, action)).toMatchObject({
      data: [payload],
    });
  });

  test('should manage ADVERTS_DETAIL_SUCCESS action', () => {
    const payload = { id: '1' };
    const action = { type: ADVERTS_DETAIL_SUCCESS, payload };
    expect(adverts(initialState.adverts, action)).toMatchObject({
      data: [payload],
    });
  });

  test('should manage ADVERTS_DELETED_SUCCESS action', () => {
    const payload = '1';
    const action = { type: ADVERTS_DELETED_SUCCESS, payload };
    const state = { ...initialState.adverts, data: [{ id: '1' }] };
    expect(adverts(state, action)).toMatchObject({
      data: [],
    });
  });
});
