import { shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import * as React from 'react';
import {About} from '../src/components/About';
import {Counter} from '../src/components/Counter';
import {Home} from '../src/components/Home';

describe('<Home />', () => {
    it('have h2', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.contains(<h2>Home</h2>)).toBeTruthy();
    });
});

describe('<About />', () => {
    it('have h2', () => {
        const wrapper = shallow(<About/>);
        expect(wrapper.contains(<h2>About</h2>)).toBeTruthy();
    });
});

describe('<Counter />', () => {
    it('have two raised button', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.find(RaisedButton)).toHaveLength(2);
    });
});
