import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from './image-container';
import * as ImageServices from '../service';

describe('Image Container Component', () => {
    let imageContainerElement;

    beforeAll(() => {
        imageContainerElement = shallow(<ImageContainer images = {['1.jpg','2.jpg']}/>)
    });

    it('should render a imageContainer element', () => {
        expect(imageContainerElement.type()).toBe('div')
    });

    it('should display image first for selection', () => {
        const firstImageElement = imageContainerElement.childAt(0);

        expect(firstImageElement.type()).toBe('div')
        expect(firstImageElement.hasClass('first-image')).toBeTruthy()

        expect(firstImageElement.children().type()).toBe('img')
        expect(firstImageElement.children().prop('width')).toBe('200px')
        expect(firstImageElement.children().prop('src')).toBe('1.jpg')
    });

    it('should display image second for selection', () => {
        const secondImageElement = imageContainerElement.childAt(1);

        expect(secondImageElement.type()).toBe('div')
        expect(secondImageElement.hasClass('second-image')).toBeTruthy()

        expect(secondImageElement.children().type()).toBe('img')
        expect(secondImageElement.children().prop('width')).toBe('200px')
        expect(secondImageElement.children().prop('src')).toBe('2.jpg')
    });
});