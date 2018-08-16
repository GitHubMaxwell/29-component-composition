// import 'jest-enzyme';
// import { configure } from 'enzyme';
// import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// //mispelled "adpater"
// Enzyme.configure({ adapter: new Adapter() })
// removed paranthesis
// configure({ adapter: new Adapter })

// hack to get it to work with webpack
// put all the gloabl stuff here
// scripts file stuff in package.json
// john slacked it

import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter:new Adapter()});
global.shallow = shallow;
global.render = render;
global.mount = mount;