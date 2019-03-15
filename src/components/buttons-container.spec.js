import React from 'react';
import { shallow } from 'enzyme';
import ButtonsContainer from './buttons-container';

describe('Header Component', () => {
    let buttonsContainerElement;

    beforeAll(() => {
        buttonsContainerElement = shallow(<ButtonsContainer/>)
    });

    it('should render a header element', () => {
        expect(buttonsContainerElement.type()).toBe('div')
    });
});