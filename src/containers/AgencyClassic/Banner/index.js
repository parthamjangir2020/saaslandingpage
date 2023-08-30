import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  ButtonGroup,
  VideoWrapper,
} from './banner.style';

import bannerImg from 'common/assets/image/agencyClassic/banner/heroImage.png';
import playIcon from 'common/assets/image/agencyClassic/banner/play.png';

import { openModal, closeModal } from '@redq/reuse-modal';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/hW98BFnVCm8"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <BannerWrapper id="banner_section">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="We built to make your life easier & smarter"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="We are one-man design studio founded by Dash & Andri. We specialise in web design and development using Webflow & other CMS."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary primary_hover" title="Read our Story" />
              <div  onClick={handleVideoModal} className="playBtn"> 
                <NextImage src={playIcon} alt="play" />
                <Button
                  className="text"
                  variant="textButton"
                  title="Our Interviews"
                />
              </div>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage className="heroImg">
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
