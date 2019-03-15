import React from 'react';
import { shallow } from 'enzyme';
import ResultContainer from './result-container';

describe('Header Component', () => {
    let resultContainerElement;

    beforeAll(() => {
        resultContainerElement = shallow(<ResultContainer/>)
    });

    it('should render a header element', () => {
        expect(resultContainerElement.type()).toBe('div')
    });
});