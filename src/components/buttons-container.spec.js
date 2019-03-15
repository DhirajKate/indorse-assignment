import React from 'react';
import { shallow } from 'enzyme';
import ButtonsContainer from './buttons-container';

describe('Buttons Container Component', () => {
    let buttonsContainerElement;

    beforeAll(() => {
        buttonsContainerElement = shallow(<ButtonsContainer/>)
    });

    it('should render a buttons container element', () => {
        expect(buttonsContainerElement.type()).toBe('div')
    });

    //this condition is not clearly stated in requirement. 
    //so i handled this scenario based on my understanding instead of keeping it unhandled.
    it('should display button for choosing option if none of displayed image is a cat', () => {
        const noCatPresentButton = buttonsContainerElement.childAt(0);
        expect(noCatPresentButton.type()).toBe('button');
        expect(noCatPresentButton.text()).toBe('None of these is a Cat');
    });

    //this condition is not clearly stated in requirement. 
    //so i handled this scenario based on my understanding instead of keeping it unhandled.
    it('should display button for choosing option if both images of are of cats', () => {
        const noCatPresentButton = buttonsContainerElement.childAt(1);
        expect(noCatPresentButton.type()).toBe('button');
        expect(noCatPresentButton.text()).toBe('Both of these are Cats');
    });
});