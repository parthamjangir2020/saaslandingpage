import styled from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';
import pattern from 'common/assets/image/agencyClassic/banner/pattern.png';

const BannerWrapper = styled.div`
  overflow: hidden;
  background-color: ${colors.secondary};

  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 966px;

    @media only screen and (max-width: 1224px) {
      min-height: auto;
      padding-top: 138px;
      padding-bottom: 100px;
      gap: 20px;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0;
    }
  }

  .heroImg {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 191px;
      height: 198px;
      right: -54px;
      bottom: 68px;
      background-image: url(${pattern?.src});
      background-size: contain;

      @media only screen and (max-width: 767px) {
        width: 138px;
        height: 138px;
        right: -20px;
        bottom: 30px;
      }
    }
  }
`;

export const BannerContent = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 62px;
    line-height: 70px;
    letter-spacing: -1px;
    font-weight: 500;
    color: white;
    margin-bottom: 16px;
    letter-spacing: -0.025em;
    width: 506px;

    @media only screen and (max-width: 1224px) {
      width: 100%;
    }

    @media only screen and (max-width: 1024px) {
      font-size: 38px;
      line-height: 50px;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
    
    @media only screen and (min-width: 480px) and (max-width: 768px) {
      font-size: 55px;
      line-height: 75px;
    }
  }

  p {
    color: white;
    font-size: 17px;
    line-height: 40px;
    font-weight: 400;
    word-spacing: 1px;
    font-family: 'Inter', sans-serif;
    width: 456px;

    @media only screen and (max-width: 1224px) {
      font-size: 16px;
      line-height: 32px;
    }

    @media only screen and (max-width: 1220px) {
      width: 100%;
    }

    @media only screen and (max-width: 777px) {
      text-align: center;
    }

    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 32px;
    }
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  width: 50%;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 60px;
  }

  img {
    margin-left: 80px;
    @media only screen and (max-width: 1600px) {
      margin-left: 0;
    }

    /* @media only screen and (max-width: 480px) {
      max-width: 70%;
    } */
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 777px) {
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    width: 170px;
    height: 55px;
    font-size: 15px;
    font-weight: 600;
    color: ${colors.buttonColor};
    font-family: 'Inter', sans-serif;
    padding: 0;

    @media only screen and (max-width: 1224px) {
      width: 150px;
      height: 50px;
    }

    &.primary {
      background: ${colors.primary}
    }

    &.text {
      color: #fff;
      border: 0px;
      width: auto;
      height: auto;

      .btn-text {
        padding-left: 10px !important;
      }
    }

    .btn-icon {
      & svg {
        width: 35px;
        height: 35px;
        color: ${colors.primary};
      }
    }

    span {
      font-size: 15px;
      font-weight: 500;
    }

    .btn-text {
      padding: 0 !important;
    }
  }

  .playBtn {
    display: flex;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;
    border-radius: 100%;
    transition: all .5s ease;

    &:hover,
    &:active {
      transform: translateY(-6px);
      transition: all .5s ease;
    }
    
    @media only screen and (max-width: 1224px) {
      margin-left: 20px;
    }

    @media only screen and (max-width: 480px) {
      margin-left: 0;
      margin-top: 20px;
    }

    img {
      width: 35px !important;
      height: 35px !important;
    }
  }
`;

export default BannerWrapper;

export const VideoWrapper = styled.div`
  max-width: 100%;
  position: relative;
  width: 900px;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;