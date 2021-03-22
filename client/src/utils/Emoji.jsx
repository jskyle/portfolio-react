import React from 'react';
import styled from 'styled-components';

const EmojiSpan = styled.span`
 font-size: 120%;
`;

const Emoji = props => (
    <EmojiSpan
        className="emoji"
        role="img"
        id={props.id}
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </EmojiSpan>
);
export default Emoji;
