import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import MarketingWrapper from "./marketing.styles";
import arrowPrimary from "common/assets/image/agencyClassic/arrow-primary.svg";
import { MARKETING } from "common/data/AgencyClassic";
import Box from "common/components/Box";

const MarketingSection = () => {
  return (
    <Fragment>
      <MarketingWrapper>
        <Container>
          <Fade up delay={100}>
            <Heading
              className="section_header"
              content="Resources to give you the information about marketing"
            />
            <Box className="row">
              <Box className="main_ad">
                {MARKETING.map((item, index) =>
                  index === 0 ? (
                    <Box className="main_ad" key={index}>
                      <img src={item.image?.src} alt="marketing image" />
                      <div className="content">
                        <Text content={item.date} />
                        <Heading content={item.title} />
                        <div className="learn-more hover_links">
                          <Button
                            className="text"
                            variant="textButton"
                            title="Learn More"
                          />
                          <NextImage src={arrowPrimary} alt="play" />
                          </div>
                    </div>
                    </Box>
                  ) : null
                )}
              </Box>

              <Box className="related_ads">
                {MARKETING.map((item, index) =>
                  index != 0 ? (
                    <Box className="single_ad" key={index}>
                      <img src={item.image?.src} className="ad_banner" alt="marketing image" />
                      <div className="content">
                        <Text content={item.date} />
                        <Heading content={item.title} />
                        <div className="learn-more hover_links">
                          <Button
                            className="text"
                            variant="textButton"
                            title="Learn More"
                          />
                          <NextImage src={arrowPrimary} alt="play" />
                        </div>
                      </div>
                    </Box>
                  ) : null
                )}
              </Box>
            </Box>
          </Fade>
        </Container>
      </MarketingWrapper>
    </Fragment>
  );
};

export default MarketingSection;
