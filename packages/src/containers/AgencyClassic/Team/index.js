import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import TeamWrapper, { TeamWrapperBg } from "./team.style";
import arrow from "common/assets/image/agencyClassic/arrow-right-fill.svg";
import videoConf from "common/assets/image/agencyClassic/team/conference.png";
import { TEAM } from "common/data/AgencyClassic";
import Box from "common/components/Box";

const TeamSection = () => {
  return (
    <Fragment>
      <TeamWrapper>
        <Container width="1170px">
          <Fade up delay={100}>
            <Heading
              className="section_header"
              content="We believe in remote job with whole team"
            />
          </Fade>
        </Container>
      </TeamWrapper>

      <TeamWrapperBg>
        <Container width="1170px">
          <Fade up delay={100}>
            <img src={videoConf?.src}
            alt="Team Meeting"
            className="meeting_ss" />
          </Fade>
          <Fade up delay={100}>
            <Box className="culture-row row">
              <Box className="team-col">
                {TEAM.map((team, index) => (
                  <Box className="culture" key={index}>
                    <NextImage src={arrow} alt="Arrow" />
                    <div className="culture_content">
                      <Heading content={team.title} />
                      <Text content={team.description} className="description" />
                    </div>
                  </Box>
                ))}
              </Box>
            </Box>
          </Fade>
          <Fade up delay={100}>
            <div className="join_us">
              <Heading content="Are you ready to join with us? We have multiple vacancies" />
              <Button className="primary primary_hover" title="Read our Story" />
            </div>
          </Fade>
        </Container>
      </TeamWrapperBg>
    </Fragment>
  );
};

export default TeamSection;
