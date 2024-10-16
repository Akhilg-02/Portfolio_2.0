import React from "react";
import { HeroContainer, Container, Title, Span, SubTitle } from "./AboutStyle";
import { Bio } from "../../data/constants";

const About = () => {
  return (
    <Container id="about">
      <HeroContainer>
        <Title>About</Title>
        <SubTitle>{Bio.description}</SubTitle>
      </HeroContainer>
    </Container>
  );
};

export default About;
