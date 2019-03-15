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
            expect(imageContainer.prop('firstPhotoIndex')==0||imageContainer.prop('firstPhotoIndex')==1).toBeTruthy()
            expect(imageContainer.prop('secondPhotoIndex')==0||imageContainer.prop('secondPhotoIndex')==1).toBeTruthy()
 
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
            containerElement.setState({result:[1,0],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[0,1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])
        });

        it('should increase the value of selected image index by 1 and set value to 0 if value of not selected image is less than 1', () => {
            containerElement.setState({result:[0,0],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[0,0],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])

            containerElement.setState({result:[-1,0],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[0,-1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])
        });

        it('should set value to one if selected image is -1 and set value to 0 if value of not selected image index is -1', () => {
            containerElement.setState({result:[-1,-1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1])

            containerElement.setState({result:[-1,-1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,0);

            expect(containerElement.instance().state.result).toEqual([1,0])
        });

        it('should decrease the value of both images index by one if user says there is not cat in both images', () => {
            containerElement.setState({result:[-1,-1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(-1);

            expect(containerElement.instance().state.result).toEqual([0,0]);

            containerElement.setState({result:[0,0],firstPhotoIndex:0,secondPhotoIndex:1});
            containerElement.instance().recordResult(-1);

            expect(containerElement.instance().state.result).toEqual([0,0]);

            containerElement.setState({result:[1,1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(-1);

            expect(containerElement.instance().state.result).toEqual([0,0])

        });

        it('should increase the value of both images index by one if user says both images are of cats', () => {
            containerElement.setState({result:[-1,-1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(1);

            expect(containerElement.instance().state.result).toEqual([1,1]);

            containerElement.setState({result:[0,0],firstPhotoIndex:0,secondPhotoIndex:1});
            containerElement.instance().recordResult(1);

            expect(containerElement.instance().state.result).toEqual([1,1]);

            containerElement.setState({result:[1,1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(1);

            expect(containerElement.instance().state.result).toEqual([2,2])

        });

        it('should display result when all images are validated by user', () => {
            containerElement.setState({result:[-1,-1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(1);

            expect(containerElement.instance().state.result).toEqual([1,1]);
            expect(containerElement.instance().state.isFeedbackRecorded).toBeTruthy();
        });

        it('should generate randome index if all the images are not yet validated by user', () => {
            mockImages = ['1.jpg','2.jpg','3.jpg']; 
            ImageServices.getAllImages = jest.fn().mockReturnValue(mockImages)
            containerElement = shallow(<Container/>)
            
            containerElement.setState({result:[-1,-1,-1],firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().recordResult(0,1);

            expect(containerElement.instance().state.result).toEqual([0,1,-1]);
            expect(containerElement.instance().state.isFeedbackRecorded).toBeFalsy();
        
            const firstPhotoIndex = containerElement.instance().state.firstPhotoIndex;
            const secondPhotoIndex = containerElement.instance().state.secondPhotoIndex;
            expect(firstPhotoIndex==0||firstPhotoIndex==1).toBeTruthy();
            expect(secondPhotoIndex==0||secondPhotoIndex==1).toBeTruthy();
         });
    });

    describe('generate random active images indexes function', () => {
        it('should generate the random indexes of images to be displayed to user',()=>{
            containerElement.setState({firstPhotoIndex:0,secondPhotoIndex:1})
            containerElement.instance().generateActiveImagesIndexes();

            const firstPhotoIndex = containerElement.instance().state.firstPhotoIndex;
            const secondPhotoIndex = containerElement.instance().state.secondPhotoIndex;
            expect(firstPhotoIndex==0||firstPhotoIndex==1).toBeTruthy();
            expect(secondPhotoIndex==0||secondPhotoIndex==1).toBeTruthy();
        })
    });
   
    
});