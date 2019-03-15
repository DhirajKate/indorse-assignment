import React, { Component } from 'react';
  
class ImageContainer extends Component {
    
    render() {
        return (
            <div className='image-container'>
                <div className="first-image">
                    <img src={this.props.images[this.props.firstPhotoIndex]} alt="" width='200px' onClick={() => this.props.recordResult(0,this.props.firstPhotoIndex)} />
                </div>
                <div className="second-image">
                    <img src={this.props.images[this.props.secondPhotoIndex]} alt="" width='200px' onClick={() => this.props.recordResult(0,this.props.secondPhotoIndex)} />
                </div>
            </div>
        );
    }
}

export default ImageContainer;