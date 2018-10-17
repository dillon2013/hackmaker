import React from 'react';
import {shallow, debug} from  'enzyme';
import TextItem from './TextItem';

describe('TextItem', () => {
    it('should display text passed in the text prop', () => {
        const props = {
            text: 'foo bar baz'
        };
        const component = shallow(<TextItem text={props.text}/>);
        console.log(component.debug());
        expect(component.find('div').text()).toEqual(props.text)
    })
});
