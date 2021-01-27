import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import transition from "styled-transition-group";
import styled from "styled-components";

const H1 = transition.h1.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
  margin-top: 0;
  margin-bottom: 20px;

  text-align: center;
  color: #3645ab;

  font-size: 24px;
  font-weight: 600;
  line-height: 22px;

  &:enter { opacity: 0; }
  &:enter-active {
    opacity: 1;
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0;
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  width: 100%;
`;

const Section = ({ title, children }) => {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setShowTitle(true);
  }, []);

  return (
    <Div>
      <H1 in={showTitle}>{title}</H1>
      <div>{children}</div>
    </Div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Section.defaultProps = {
  title: "Title template",
};
