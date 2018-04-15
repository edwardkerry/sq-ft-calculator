import Enzyme, { shallow, mount }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.shallow = shallow;

Enzyme.configure({ adapter: new Adapter() })
