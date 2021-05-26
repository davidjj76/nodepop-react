import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AdvertsPage from './AdvertsPage';
import { initialState } from '../../../store/reducers';
import { advertsLoadAction } from '../../../store/actions';

jest.mock('../../../store/actions');

describe('AdvertsPage', () => {
  let wrapper;
  const store = {
    getState: () => initialState,
    subscribe: () => {},
    dispatch: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <AdvertsPage />
        </Router>
      </Provider>,
    );
  });

  test('should render snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should dispatch advertsLoadAction action', () => {
    expect(store.dispatch).toHaveBeenCalled();
    expect(advertsLoadAction).toHaveBeenCalled();
  });
});
