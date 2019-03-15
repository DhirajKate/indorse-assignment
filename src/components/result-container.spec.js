import React from 'react';
import { shallow } from 'enzyme';
import ResultContainer from './result-container';

describe('Result Container Component', () => {
    let resultContainerElement;

    beforeAll(() => {
        resultContainerElement = shallow(<ResultContainer result={[0,2,1]} images={['1.jpg','2.jpg','3.jpg']}/>)
    });

    it('should render a result container element', () => {
        expect(resultContainerElement.type()).toBe('div')
    });

    it('should display header label stating label', () => {
        expect(resultContainerElement.childAt(0).type()).toBe('h3');
        expect(resultContainerElement.childAt(0).text()).toBe('Result')
    });

    it('should display image container', () => {
        const imageContainer = resultContainerElement.childAt(1);
        expect(imageContainer.type()).toBe('div')
    });

    it('should display images based on the descending order of result', () => {
        const imageContainer = resultContainerElement.childAt(1);

        const firstImageElement = imageContainer.childAt(0);
        expect(firstImageElement.type()).toBe('div')
        expect(firstImageElement.hasClass('image')).toBeTruthy();
        expect(firstImageElement.children().type()).toBe('img')
        expect(firstImageElement.children().prop('width')).toBe('200px')
        expect(firstImageElement.children().prop('src')).toBe('2.jpg')

        const secondImageElement = imageContainer.childAt(1);
        expect(secondImageElement.type()).toBe('div')
        expect(secondImageElement.hasClass('image')).toBeTruthy();
        expect(secondImageElement.children().type()).toBe('img')
        expect(secondImageElement.children().prop('width')).toBe('200px')
        expect(secondImageElement.children().prop('src')).toBe('3.jpg')
    });


});