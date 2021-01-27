import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const P = styled.p`
  display: block;
  margin-top: 0;
  margin-bottom: 0;

  word-break: break-word;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;
const DATE_SPAN = styled.span`
  display: inline-block;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;

  margin-right: 10px;

  color: #6368e5;
`;
const NAME_SPAN = styled.span`
  display: inline-block;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const MessageItem = ({ name, text, time }) => {
  return (
    <>
      <P>
        <DATE_SPAN>{time}</DATE_SPAN>
        <NAME_SPAN>{name}</NAME_SPAN>
        <br />
        {text}
      </P>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.messages.items.find(
    (message) => message.id === ownProps.id
  );
  return { ...item };
};

export default connect(mapStateToProps)(MessageItem);

MessageItem.propTypes = {
  id: PropTypes.string.isRequired,
};
