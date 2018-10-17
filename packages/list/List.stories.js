import React from 'react';
import { storiesOf } from '@storybook/react';
import TextItem from 'text-item';
import List from './List';

const items = [
    {
        type: 'text',
        data: 'This is text item one'
    },
    {
        type: 'text',
        data: 'This is text item one'
    },
    {
        type: 'image',
        data: 'https://hostmaker-website.imgix.net/assets/images/logos/hostmaker-logo.svg?auto=format&dpr=2&crop=faces&fit=crop&w=200&h=38&ixlib=react-7.2.0'}
]

storiesOf('List', module)
    .add('with child components', () => (
        <List>
            <TextItem>this is bar</TextItem>
        </List>
    ))
    .add('with list of items', () => (
        <List items={items} />
    ))

