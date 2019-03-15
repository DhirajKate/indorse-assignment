import React from 'react';
import { shallow } from 'enzyme';
import Container from './container';

describe('Container component', () => {
    let containerElement;

    beforeAll(() => {
        containerElement = shallow(<Container/>)
    });

    it('should render container element', () => {
        expect(containerElement.type()).toBe('div')
    });

    it('should display the header', () => {
        const headerElement = containerElement.childAt(0);
        expect(headerElement.type()).toEqual('Header')
      
    });
    describe('when user has not yet provided feedback', () => {
        let selectionContainer;
        beforeAll(() => {
            selectionContainer = containerElement.childAt(1);
        });
        it('should render a selection container', () => {
            expect(selectionContainer.type()).toEqual('div')
            expect(selectionContainer.hasClass('selection-container')).toBeTruthy()
        });

        it('should display the image container', () => {
            const imageContainer = selectionContainer.childAt(0)
            expect(imageContainer.type()).toEqual('div')
            expect(imageContainer.hasClass('image-container')).toBeTruthy()
 
        });
    
        it('should display the wrapper for buttons', () => {
            const buttonContainer = selectionContainer.childAt(1)
            expect(buttonContainer.type()).toEqual('div')
            expect(buttonContainer.hasClass('button-container')).toBeTruthy()
 
        });
    });

    describe('when user has provided feedback for all images', () => {
        let resultContainer;
        beforeAll(() => {
            resultContainer = containerElement.childAt(1);
        });
        it('should display the results container', () => {
            expect(selectionContainer.type()).toEqual('ResultContainer');
        });
    });
   
    
});