import { shallow } from 'enzyme';
import { AuthButton } from './AuthButton';

describe('AuthButton', () => {
  let wrapper;
  const props = {
    isLogged: true,
    onLogout: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<AuthButton {...props} />);
  });

  test('should render snapshot when isLogged', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render snapshot when NOT isLogged', () => {
    wrapper.setProps({ isLogged: false });
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onLogout', () => {
    wrapper.find('ConfirmationButton').props().onConfirm();
    expect(props.onLogout).toHaveBeenCalled();
  });
});
