import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header Component', () => {
    let headerElement;

    beforeAll(() => {
        headerElement = shallow(<Header/>)
    });

    it('should render a header element', () => {
        expect(headerElement.type()).toBe('div')
    });
});