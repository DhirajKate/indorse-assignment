import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from './image-container';

describe('Header Component', () => {
    let imageContainerElement;

    beforeAll(() => {
        imageContainerElement = shallow(<ImageContainer/>)
    });

    it('should render a header element', () => {
        expect(imageContainerElement.type()).toBe('div')
    });
});