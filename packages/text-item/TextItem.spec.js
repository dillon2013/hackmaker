import React from 'react';
import {shallow, debug} from  'enzyme';
import TextItem from './TextItem';

describe('TextItem', () => {
    it('should display text passed in the text prop', () => {
        const props = {
            text: 'foo bar baz'
        };
        const component = shallow(<TextItem text={props.text}/>);
        expect(component.find('[data-test-id="textItem"]').text()).toEqual(props.text)
    })
});
