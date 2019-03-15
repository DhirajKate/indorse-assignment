import React, { Component } from 'react';
import ImageContainer from './image-container';
import Header from './header';
import ButtonsContainer from './buttons-container';
import ResultContainer from './result-container';
import { getAllImages } from '../service';
class Container extends Component {
    state = {
        isFeedbackRecorded: false,
        images: getAllImages(),
        result: [],
        firstPhotoIndex: 0,
        secondPhotoIndex: 1
    }

    componentDidMount = () => {
        let result = [];
        this.state.images.forEach(element => {
            result.push(-1);
        });
        this.setState({ result })
    }
    recordResult = (choice, selectedIndex) => {
        let result = this.state.result;
        let firstPhotoIndex = this.state.firstPhotoIndex;
        let secondPhotoIndex = this.state.secondPhotoIndex;

        if(choice==0){
            if(selectedIndex==firstPhotoIndex){
                result[firstPhotoIndex]==-1?result[firstPhotoIndex]=1:result[firstPhotoIndex]++;
                result[secondPhotoIndex]<1?result[secondPhotoIndex]=0:
                result[secondPhotoIndex]--;
            }else{
                result[secondPhotoIndex]==-1?result[secondPhotoIndex]=1:result[secondPhotoIndex]++;
                result[firstPhotoIndex]<1?result[firstPhotoIndex]=0:
                result[firstPhotoIndex]--;
            }
        }else if(choice==-1){
            result[firstPhotoIndex]<1? result[firstPhotoIndex]=0: result[firstPhotoIndex]--;
            result[secondPhotoIndex]<1? result[secondPhotoIndex]=0: result[secondPhotoIndex]--;
       
        }else{
            result[firstPhotoIndex]==-1? result[firstPhotoIndex]=1: result[firstPhotoIndex]++;
            result[secondPhotoIndex]==-1? result[secondPhotoIndex]=1: result[secondPhotoIndex]++;
       
        }

        this.setState({result})
    }

    render() {
        return (
            <div className='container'>
                <Header />
                {this.state.isFeedbackRecorded ?
                    <ResultContainer /> :
                    <div className="selection-container">
                        <ImageContainer images={this.state.images} recordResult={this.recordResult} firstPhotoIndex={this.state.firstPhotoIndex} secondPhotoIndex={this.state.secondPhotoIndex} />
                        <ButtonsContainer recordResult={this.recordResult} />
                    </div>
                }
            </div>
        );
    }
}

export default Container;