import React, { Component } from 'react';

class ResultContainer extends Component {
    render() {
        let result = Array.from(Array(this.props.result.length).keys())
        .sort((b,a) => this.props.result[a] < this.props.result[b] ? -1 : (this.props.result[b] < this.props.result[a]) | 0)
        return (
            <div>
                <h3>Result</h3>
                <div>
                    {result.map(element=>(
                        this.props.result[element]>0?
                        <div className="image">
                        <img src={this.props.images[element]} width='200px' />
                    </div>:<React.Fragment/>
                    ))}
                </div>
            </div>
        );
    }
}

export default ResultContainer;