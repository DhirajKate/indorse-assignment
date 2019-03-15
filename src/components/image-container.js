import React, { Component } from 'react';
import {getAllImages} from '../service';
  
class ImageContainer extends Component {
    state = {
        images :getAllImages(),
        imageOneIndex:0,
        imageTwoIndex:1
    }
    render() {
        return (
            <div className='image-container'>
                <div className="first-image">
                    <img src={this.state.images[this.state.imageOneIndex]} width='200px' onClick={() => this.setState({ imageOneIndex: this.state.imageOneIndex + 2 })} />
                </div>
                <div className="second-image">
                    <img src={this.state.images[this.state.imageTwoIndex]} width='200px' onClick={() => this.setState({ imageTwoIndex: this.state.imageTwoIndex + 2 })} />
                </div>
            </div>
        );
    }
}

export default ImageContainer;