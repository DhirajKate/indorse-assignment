import React from 'react';
import { shallow } from 'enzyme';
import Container from './container';
import ImageContainer from './image-container';
import Header from './header';
import ButtonsContainer from './buttons-container';
import ResultContainer from './result-container';
import * as ImageServices from '../service';
describe('Container component', () => {
    let containerElement,mockImages;

    beforeAll(() => {
        mockImages = ['1.jpg','2.jpg']; 
        ImageServices.getAllImages = jest.fn().mockReturnValue(mockImages)
        containerElement = shallow(<Container/>)
    });

    it('should render container element', () => {
        expect(containerElement.type()).toBe('div')
        expect(containerElement.hasClass('container')).toBeTruthy()
    });

    it('should initialize result array and update it in state', () => {
        expect(containerElement.instance().state.result).toEqual([-1,-1])
    });

    it('should display the header', () => {
        const headerElement = containerElement.childAt(0);
        expect(headerElement.type()).toEqual(Header)
      
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
            expect(imageContainer.type()).toEqual(ImageContainer)
            expect(imageContainer.prop('images')).toEqual(mockImages)
            expect(imageContainer.prop('firstPhotoIndex')).toEqual(0)
            expect(imageContainer.prop('secondPhotoIndex')).toEqual(1)
 
        });
    
        it('should display the wrapper for buttons', () => {
            const buttonContainer = selectionContainer.childAt(1)
            expect(buttonContainer.type()).toEqual(ButtonsContainer)
        });
    }); 

    describe('when user has provided feedback for all images', () => {
        let resultContainer;
        beforeAll(() => {
            containerElement.setState({isFeedbackRecorded:true})
            resultContainer = containerElement.childAt(1);
        });
        it('should display the results container', () => {
            expect(resultContainer.type()).toEqual(ResultContainer);
        });
    });

    describe('function to record the result of selection', () => {
        it('should increase the value of selected image index by 1 and decrease value of not selected image by 1', () => {
            containerElement.setState({result:[1,0]})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[0,1]})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])
        });

        it('should increase the value of selected image index by 1 and set value to 0 if value of not selected image is less than 1', () => {
            containerElement.setState({result:[0,0]})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[0,0]})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])

            containerElement.setState({result:[-1,0]})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[0,-1]})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])
        });

        it('should set value to one if selected image is -1 and set value to 0 if value of not selected image index is -1', () => {
            containerElement.setState({result:[-1,-1]})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[-1,-1]})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])
        });

        it('should decrease the value of both images index by one if user says there is not cat in both images', () => {
            containerElement.setState({result:[-1,-1]})
            containerElement.instance().recordResult(-1);

            expect(containerElement.instance().state.result).toEqual([0,0]);

            containerElement.setState({result:[0,0]});
            containerElement.instance().recordResult(-1);

            expect(containerElement.instance().state.result).toEqual([0,0]);

            containerElement.setState({result:[1,1]})
            containerElement.instance().recordResult(-1);

            expect(containerElement.instance().state.result).toEqual([0,0])

        });

        it('should increase the value of both images index by one if user says both images are of cats', () => {
            containerElement.setState({result:[-1,-1]})
            containerElement.instance().recordResult(1);

            expect(containerElement.instance().state.result).toEqual([1,1]);

            containerElement.setState({result:[0,0]});
            containerElement.instance().recordResult(1);

            expect(containerElement.instance().state.result).toEqual([1,1]);

            containerElement.setState({result:[1,1]})
            containerElement.instance().recordResult(1);

            expect(containerElement.instance().state.result).toEqual([2,2])

        });
    });
   
    
});