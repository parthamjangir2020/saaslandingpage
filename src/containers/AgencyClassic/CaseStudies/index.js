import React from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import CaseStudies from "./casestudies.styles";

import arrowWhite from "common/assets/image/agencyClassic/arrow-white.svg";
import arrowPrimary from "common/assets/image/agencyClassic/arrow-primary.svg";
import Box from "common/components/Box";
import { CASESTUDY } from "common/data/AgencyClassic";

const CaseStudy = () => {
  return (
    <CaseStudies>
      <Container>
        <Fade up delay={100}>
          <Box>
            <Heading content="Read some amazing case studies" className="sectionTitle" />
          </Box>
        </Fade>
        <Box className="row">
          <Fade up delay={100}>
            <Box className="col first-col">
              {CASESTUDY.map((casestudies, index) => (
                (index % 2) == 0 ?
                <div key={index} className="case_study">
                  <NextImage src={casestudies.image} alt="Case Study"/>
                  <Text content={casestudies.subheading} /> 
                  <Heading content={casestudies.heading} />
                  <div className="learn-more hover_links">
                    <Button
                      className="text"
                      variant="textButton"
                      title="Learn More"
                    />
                    <NextImage src={arrowPrimary} alt="play" />
                  </div>
                </div>
                : 
                null

              ))}
            </Box>
          </Fade>
          <Fade up delay={100}>
            <Box className="col last-col">
              {CASESTUDY.map((casestudies, index) => (
                (index % 2) != 0 ?
                <div key={index} className="case_study">
                  <NextImage src={casestudies.image} alt="Case Study"/>
                  <Text content={casestudies.subheading} /> 
                  <Heading content={casestudies.heading} />
                  <div className="learn-more hover_links">
                    <Button
                      className="text"
                      variant="textButton"
                      title="Learn More"
                    />
                    <NextImage src={arrowPrimary} alt="play" />
                  </div>
                </div>
                : 
                null

              ))}
            </Box>
          </Fade>
        </Box>
        <Box>
          <Button className="primary explore-btn primary_hover" title="Read our Story" />
        </Box>
      </Container>
    </CaseStudies>
  );
};

export default CaseStudy;
