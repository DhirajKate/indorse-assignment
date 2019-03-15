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

    it('should display header stating "Which of these is a cat?"', () => {
        const labelElement = headerElement.children();

        expect(labelElement.type()).toBe('h2')
        expect(labelElement.text()).toBe('Which of these is a cat?')
    });
});