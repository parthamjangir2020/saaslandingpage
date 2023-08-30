import React from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import StoryWrapper from "./story.styles";
import storyImg from 'common/assets/image/agencyClassic/story/image.png';

import Box from "common/components/Box";

const Support = () => {
  return (
    <StoryWrapper id="about_section">
      <Container>
        <Fade up delay={100}>
          <Box className="row">
            <Box className="story-col">
              <Text content="What is our story" className="subheading" />
              <Heading content="Meet Dash & Andri" />
              <Text content="who is our CEO & Co-founder, they built this agency to make opportunity." />
              <Text content="Our core members created this place for Designers, Developers, Product Owners, Marketing Managers, Startupers, Freelancers and really for everyone who appreciates fine designs and well-crafted sites. We want to inspire and support you in the process of creating your own unique website projects." className="description" />

              
              <Button className="primary primary_hover" title="Read our Story" />
            </Box>
            <Box className="story-col story-img">
              <NextImage src={storyImg} alt="story banner" />
            </Box>
          </Box>
        </Fade>
      </Container>
    </StoryWrapper>
  );
};

export default Support;
