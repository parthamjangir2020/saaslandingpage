import React from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SupportWrapper from "./supportSection.style";

import arrowWhite from "common/assets/image/agencyClassic/arrow-white.svg";
import arrowPrimary from "common/assets/image/agencyClassic/arrow-primary.svg";
import Box from "common/components/Box";
import { SUPPORT } from "common/data/AgencyClassic";

const Support = () => {
  return (
    <SupportWrapper>
      <Container>
        <Fade up delay={100}>
          <Box className="row">
            <Box className="support-col primary">
              <Text content="Instant support response" className="subheading" />
              <Heading content="Get your instant response from our dedicated support team." />
              <Text content="We start each new digital product design partnership with an in‑depth discovery phase to immerse ourselves in business." />

              <div className="learn-more hover_links">
                <Button
                  className="text"
                  variant="textButton"
                  title="Learn More"
                />
                <NextImage src={arrowWhite} alt="play" />
              </div>

              <div className="horizontal-scroll support-slider">
                  {SUPPORT.map((support, index) => (
                    // <NextImage src={support.person} alt="support person" className="horizontal-scroll__item" />
                    <img src={support.person?.src} key={index} className="horizontal-scroll__item"/>
                  ))}
              </div>
            </Box>
            <Box className="support-col secondary">
              <Text content="Instant support response" className="subheading" />
              <Heading content="Skilful use of new technologies can drive the development." />
              <Text content="We start each new digital product design partnership with an in‑depth discovery phase to immerse ourselves in business." />

              <div className="learn-more hover_links">
                <Button
                  className="text"
                  variant="textButton"
                  title="Learn More"
                />
                <NextImage src={arrowPrimary} alt="play" />
              </div>

              <div className="graph">
                <div>
                  <Heading content="85%" />
                  <Text content="Sales Increase" />
                </div>
                
                <div>
                  <Heading content="36k/daily" />
                  <Text content="Visitor Growth" />
                </div>
              </div>
            </Box>
          </Box>
        </Fade>
      </Container>
    </SupportWrapper>
  );
};

export default Support;
