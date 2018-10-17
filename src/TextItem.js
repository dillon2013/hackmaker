import React from "react";
import { PropTypes } from "prop-types";
import { styled } from "styled-components";

// const Wrapper = styled.div`
//     margin: ${props.margin === true}
// `

function TextItem({text, children}) {
    return <div>{text || children}</div>
}

TextItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default TextItem;
