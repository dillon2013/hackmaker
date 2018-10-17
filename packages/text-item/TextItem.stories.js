import React from 'react';
import { storiesOf } from '@storybook/react';
import TextItem from './TextItem';

storiesOf('TextItem', module)
    .add('with text', () => <TextItem text="blah blah!"></TextItem>)
    .add('with text and margin', () => <TextItem text="blah blah!" margin></TextItem>)
