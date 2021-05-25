import {
  getIsLogged,
  getAdverts,
  getAreAdvertsLoaded,
  getAdvertDetail,
  getAreTagsLoaded,
} from './selectors';

const state = {
  auth: true,
  adverts: {
    loaded: true,
    data: [{ id: '1' }],
  },
  tags: ['motor'],
};

describe('getIsLogged', () => {
  test('should return true', () => {
    expect(getIsLogged(state)).toBe(true);
  });
});

describe('getAdverts', () => {
  test('should return adverts', () => {
    expect(getAdverts(state)).toHaveLength(1);
  });
});

describe('getAreAdvertsLoaded', () => {
  test('should return adverts', () => {
    expect(getAreAdvertsLoaded(state)).toBe(true);
  });
});

describe('getAdvertDetail', () => {
  test('sould return advert', () => {
    expect(getAdvertDetail(state, '1')).toMatchObject({ id: '1' });
  });

  test('sould not return advert', () => {
    expect(getAdvertDetail(state, '2')).toBeUndefined();
  });
});

describe('getAreTagsLoaded', () => {
  test('should return true', () => {
    expect(getAreTagsLoaded(state)).toBe(true);
  });

  test('should return false', () => {
    expect(getAreTagsLoaded({ ...state, tags: [] })).toBe(false);
  });
});
