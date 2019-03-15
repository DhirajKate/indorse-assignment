import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from './image-container';
import * as ImageServices from '../service';

describe('Image Container Component', () => {
    let imageContainerElement;

    beforeAll(() => {
        ImageServices.getAllImages = jest.fn().mockReturnValue(['1.jpg','2.jpg'])
        imageContainerElement = shallow(<ImageContainer/>)
    });

    it('should render a imageContainer element', () => {
        expect(imageContainerElement.type()).toBe('div')
    });
});