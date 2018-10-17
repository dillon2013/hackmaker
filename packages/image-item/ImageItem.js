import React from 'react';
import PropTypes from 'prop-types';

function ImageItem({src}) {
    return (
        <div>
            <img src={src} alt=""/>
        </div>
    )
}

ImageItem.propTypes = {
    src: PropTypes.string.isRequired
};

export default ImageItem;
