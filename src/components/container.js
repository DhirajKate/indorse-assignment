import React, { Component } from 'react';
import ImageContainer from './image-container';
import Header from './header';
import ButtonsContainer from './buttons-container';
import ResultContainer from './result-container';
class Container extends Component {
    state = {
        isFeedbackRecorded: false
    }
    render() {
        return (
            <div>
                <Header />
                {this.state.isFeedbackRecorded ?
                    <ResultContainer /> :
                    <div className="selection-container">
                        <ImageContainer />
                        <ButtonsContainer />
                    </div>
                }
            </div>
        );
    }
}

export default Container;