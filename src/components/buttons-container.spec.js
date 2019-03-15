import React from 'react';
import { shallow } from 'enzyme';
import ButtonsContainer from './buttons-container';

describe('Buttons Container Component', () => {
    let buttonsContainerElement,
        mockRecordResultFunction;

    beforeAll(() => {
        mockRecordResultFunction = jest.fn();
        buttonsContainerElement = shallow(<ButtonsContainer recordResult={mockRecordResultFunction} />)
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

    it('should call record result if user says none of the images is of cat', () => {
        const noCatPresentButton = buttonsContainerElement.childAt(0);
        noCatPresentButton.simulate('click');
        expect(mockRecordResultFunction).toBeCalledWith(-1);
    });

    it('should call record result if user says both of the images are of cats', () => {
        const noCatPresentButton = buttonsContainerElement.childAt(1);
        noCatPresentButton.simulate('click');
        expect(mockRecordResultFunction).toBeCalledWith(1);
    });
});