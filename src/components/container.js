import React, { Component } from 'react';
import ImageContainer from './image-container';
import Header from './header';
import ButtonsContainer from './buttons-container';
import ResultContainer from './result-container';
import {getAllImages} from '../service';
class Container extends Component {
    state = {
        isFeedbackRecorded: false,
        images :getAllImages(),
        result:[]
    }
    render() {
        return (
            <div className='container'>
                <Header />
                {this.state.isFeedbackRecorded ?
                    <ResultContainer /> :
                    <div className="selection-container">
                        <ImageContainer images={this.state.images}/>
                        <ButtonsContainer />
                    </div>
                }
            </div>
        );
    }
}

export default Container;