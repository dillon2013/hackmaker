import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
    color: red;
    padding: 10px;
    margin: ${props => props.margin ? '10px 0' : null};
`;

function TextItem({text, children, margin}) {
    return <Wrapper margin={margin}>{text || children}</Wrapper>
}

TextItem.propTypes = {
    text: PropTypes.string.isRequired,
    margin: PropTypes.string
};
TextItem.displayName = 'TextItem';

export default TextItem;
