import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import colors from 'common/theme/agencyClassic/colors';

const FeatureSectionWrapper = styled.section`
  padding: 180px 0 80px;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media only screen and (max-width: 571px) {
    padding: 40px 0 30px;
  }

  .row {
    justify-content: space-between;
  }

  @keyframes img_hover {
    16% {
    transform: translateY(8px);
    }
    33% {
        transform: translateY(-6px);
    }
    50% {
        transform: translateY(4px);
    }
    67% {
        transform: translateY(-2px);
    }
    83% {
        transform: translateY(1px);
    }
    100% {
        transform: translateY(0px);
    }
  }

  .features {
    border: 0px;
    width: 380px;
    margin-bottom: 70px;
    padding: 38px 30px 48px 0;

    &:hover {
      .service_icon {
        transition: all .5s ease;
        /* transform: rotate(360deg); */
        animation: img_hover 2s;
      }
    }

    .service_icon {
      width: 50px;
      height: 50px;
      transition: all .5s ease;
    }

    @media only screen and (max-width: 1400px) {
      width: calc(380px - 88px);
    }

    @media only screen and (max-width: 1024px) {
      margin: 0;
      padding: 30px 30px 20px 0;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
      margin: 0;
      padding: 20px 0 40px;
    }

    &:hover {
      background: #FFFFFF;
      box-shadow: 50px 40px 80px rgba(58, 75, 95, 0.05);
      transition: all 0.3s ease-in-out;
    }
  }

  .feature__block {
    position: relative;
    padding: 0;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    color: ${colors.textColor};
    padding-bottom: 100px;

    @media only screen and (max-width: 1023px) {
      padding-bottom: 40px;
      padding-bottom: 40px;
      font-size: 26px;
      margin: 0 auto;
    }
  }

  .content__wrapper {
    h2 {
      font-size: 20px;
      text-align: left;
      padding-bottom: 0px;
      margin-bottom: 20px;
      margin-top: 40px;

      @media only screen and (max-width: 1023px) {
        width: 100%;
        margin: 40px 0 20px 0;
      }
    }

    p {
      text-align: left;
      color: rgba(9, 19, 31, 1);
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 20px;

      @media only screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 32px;
      }
    } 
  }

  .learn-more {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .reusecore__button {
    min-width: auto;
    min-height: auto;
    font-size: 15px;
    font-weight: 600;
    
    .btn-text {
      padding: 0;
    }
  }
`;

export default FeatureSectionWrapper;
