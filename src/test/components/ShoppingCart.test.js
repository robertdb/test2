import React from 'react';
import { shallow, mount } from 'enzyme';
import ShoppingCart from '../../components/ShoppingCart';

describe('ShoppingCart', () => {
    it('recieve properly a counter', () => {
        const wrapper = shallow(<ShoppingCart counter={10} />);
        expect(wrapper.find("Counter").text()).toEqual('10')
    });
    it('hide counter if value is zero', () => {
        const wrapper = shallow(<ShoppingCart counter={0} />);
        expect(wrapper.find("Counter").exists()).toEqual(false);
    });
    it('show counter if value is more than zero', () => {
        const wrapper = shallow(<ShoppingCart counter={1} />);
        expect(wrapper.find("Counter").exists()).toEqual(true);
    });
    it('Counter value can not increase', () => {
        const wrapper = shallow(<ShoppingCart counter={11} max={10} />);
        expect(wrapper.find("Counter").text()).toEqual('10')
    });
    it('Callback to redirect sending like a prop', () => {
        const goTo = () => console.log('go!');
        const wrapper = mount(<ShoppingCart counter={1} max={10} goto={goTo} />);
        expect(wrapper.props().goto).toEqual(goTo);
    });
});