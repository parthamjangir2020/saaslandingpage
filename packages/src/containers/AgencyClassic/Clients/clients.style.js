import styled, { keyframes } from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';

const slideShow = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SectionWrapper = styled.section`
  padding-top: 40px;
  position: relative;

  @media only screen and (max-width: 991px) {
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 624px) {
    padding-bottom: 45px;
  }
`;

export const ExperienceMainWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  padding-top: 10px;

  @media only screen and (max-width: 991px) {
    padding-top: 0px;
    padding-bottom: 15px;
  }
`;

export const ClientWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media only screen and (max-width: 624px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media only screen and (max-width: 480px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  .client__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.gray};
    text-align: center;
    margin-bottom: 0;
  }
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;

  @media only screen and (max-width: 991px) {
    padding: 0;
  }

  .experience__item {
    width: 50%;
    margin: 0 0 40px;

    @media only screen and (max-width: 624px) {
      width: 100%;
    }
  }

  .experience__item {
    display: flex;
    align-items: flex-start;
    padding: 0px 70px;

    @media only screen and (max-width: 1366px) {
      padding: 0px 40px;
    }

    @media only screen and (max-width: 1219px) {
      padding: 0px 15px;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0px 15px;
    }

    @media only screen and (max-width: 624px) {
      padding: 0px 50px;
    }

    @media only screen and (max-width: 480px) {
      padding: 0px;
    }

    .icon__wrapper {
      margin-right: 20px;
      flex-shrink: 0;

      @media only screen and (max-width: 768px) {
        margin-bottom: 15px;
        margin-right: 0px;
      }
    }
  }
`;

export const ImageSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0px 0;

  @media only screen and (max-width: 991px) {
    padding-top: 65px;
  }

  @media only screen and (max-width: 624px) {
    padding-top: 45px;
  }
`;

export const ImageSlide = styled.div`
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  animation: ${slideShow} 80s linear infinite;

  a {
    margin: 0 35px;
    transition: all 0.3s ease;
    filter: grayscale(1);

    @media only screen and (max-width: 991px) {
      margin: 0 20px;
    }

    @media only screen and (max-width: 624px) {
      margin: 0 5px;
    }

    img {
      @media only screen and (max-width: 1360px) {
        max-width: 90%;
      }

      @media only screen and (max-width: 991px) {
        max-width: 80%;
      }
    }

    &:hover {
      filter: none;
    }
  }
`;

export default SectionWrapper;
