import React from 'react';
import TextItem from '@hackmaker/text-item';
import ImageItem from '@hackmaker/image-item';

function List ({title, items, children}) {
    let content;

    if(items && items.length > 0) {
         content = items.map(item => {
            if (item.type === 'text') {
                return <TextItem text={item.data}/>
            } else {
                return <ImageItem src={item.data} />
            }
        })
    } else {
        content = children
    }

    console.log('CONTENT', content)


    return (
        <div>
            <p>{title}</p>
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default List;
