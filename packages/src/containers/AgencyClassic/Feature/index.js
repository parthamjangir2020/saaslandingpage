import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import { FEATURES } from "common/data/AgencyClassic";
import Container from "common/components/UI/Container";
import FeatureSectionWrapper from "./featureSection.style";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import arrow from 'common/assets/image/agencyClassic/services/arrow.svg';
import { Fade } from "react-reveal";

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="product_section">
      <Container>
        <Fade up delay={100}>
          <Heading
            content="We create world-class web design, and branding"
            {...sectionTitle}
          />
        </Fade>
        <Box className="row" {...row}>
          {FEATURES.map((feature, index) => (
            <Fade up delay={100} key={index}>
              <Box className="col features" {...col} key={index}>
                <div className="service_icon">
                  <NextImage src={feature.icon} alt="icon" />
                </div>
                <FeatureBlock
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={feature.title} {...featureTitle} />}
                  description={
                    <Text content={feature.description} {...featureDescription} />
                  }
                />
                
                <div className="learn-more hover_links">
                  <Button
                    className="text"
                    variant="textButton"
                    title="Learn More"
                  />
                  <NextImage src={arrow} alt="play" />
                </div>
              </Box>
            </Fade>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"],
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px",
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    borderLeft: "1px solid #f1f4f6",
    borderBottom: "1px solid #f1f4f6",
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "30px", "40px"],
  },
  // feature icon default style
  iconStyle: {
    width: "84px",
    height: "84px",
    m: "0 auto",
    borderRadius: "50%",
    bg: "#93d26e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    color: "#ffffff",
    overflow: "hidden",
    mb: "30px",
  },
  // feature content default style
  contentStyle: {
    textAlign: "center",
  },
  // feature title default style
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "20px"],
    letterSpacing: "-0.020em",
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#343d48cc",
  },
};

export default FeatureSection;
