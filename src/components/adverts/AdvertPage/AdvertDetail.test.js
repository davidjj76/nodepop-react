import { shallow } from 'enzyme';
import AdvertDetail from './AdvertDetail';

describe('AdvertDetail', () => {
  let wrapper;
  const props = {
    name: 'Coche',
    sale: true,
    tags: ['motor'],
    price: 5000,
    onDelete: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<AdvertDetail {...props} />);
  });

  test('should render snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onDelete', () => {
    wrapper.find('ConfirmationButton').props().onConfirm();
    expect(props.onDelete).toHaveBeenCalled();
  });
});
