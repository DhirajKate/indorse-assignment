import React from 'react';
import { shallow } from 'enzyme';
import ResultContainer from './result-container';

describe('Result Container Component', () => {
    let resultContainerElement;

    beforeAll(() => {
        resultContainerElement = shallow(<ResultContainer/>)
    });

    it('should render a result container element', () => {
        expect(resultContainerElement.type()).toBe('div')
    });
});