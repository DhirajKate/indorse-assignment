import React, { Component } from 'react';

class ButtonsContainer extends Component {
    render() {
        return (
            <div className="buttons-container">
                <button onClick={() => this.props.recordResult(-1)}>None of these is a Cat</button>
                <button onClick={() => this.props.recordResult(1)}>Both of these are Cats</button>
            </div>
        );
    }
}

export default ButtonsContainer;