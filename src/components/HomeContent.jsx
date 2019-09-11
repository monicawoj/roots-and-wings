import React from "react";
import Button from "components/_ui/Button";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import colors from "styles/colors";

const Container = styled("div")`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled("div")`
  padding-bottom: 3em;
  width: 60%;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ul {
    font-size: 1.2em;
    li {
      margin-top: 10px;
    }
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${colors.themeBlue};
    &:hover {
      color: ${colors.themeGreen};
    }
  }
`;

const Actions = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0;
  }
`;

const HomeContent = ({ content }) => (
  <Container>
    <Content>{RichText.render(content)}</Content>
    <Actions>
      <a
        href="mailto:monica.wojciechowski@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="Button--secondary">Let's chat?</Button>
      </a>
    </Actions>
  </Container>
);

export default HomeContent;

HomeContent.propTypes = {
  content: PropTypes.array.isRequired,
};
