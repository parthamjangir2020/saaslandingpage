import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import colors from 'common/theme/agencyClassic/colors';

export const Section = styled.footer`
  color: white;
  background-color: ${colors.secondary};
  padding: 80px 0 40px;

  @media screen and (max-width: 1440px) {
    padding: 70px 0 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 0 20px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 70px 0 30px;
  padding: 70px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);

  @media only screen and (max-width: 991px) {
    gap: 30px;
  }

  @media only screen and (max-width: 480px) {
    /* flex-direction: column;
    gap: 30px;
    padding: 40px 0; */
    row-gap: 40px;
    padding: 40px 0;
    column-gap: 0;
  }

  h4 {
    margin: 0 0 25px;
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }

  .react-reveal {
    @media screen and (max-width: 768px) {
      width: calc(35% - 12px);
    }
    @media screen and (max-width: 480px) {
      width: 50%;
    }
    @media screen and (max-width: 360px) {
      width: 100%;
    }
  }
`;

export const FooterWidget = styled.div`

  &:last-child {
    margin-right: 0;
  }

  .widgetListItem {
    a {
      font-size: 15px;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: -0.002em;
      opacity: 0.7;
      color: white !important;

      &:hover {
        color: ${colors.primary} !important;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Copyright = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.8);

  span {
    color: rgba(255, 255, 255, 1);
    padding-left: 5px;
  }

  img {
    margin-right: 15px;
    max-width: 130px;

    @media screen and (max-width: 480px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }

  @media screen and (max-width: 360px) {
    flex-wrap: wrap;
  }
  
  li {
    margin-right: 15px;
    a {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.2px;
      text-align: right;
      opacity: 0.8;
      color: white;

      &:hover {
        color: ${colors.primary};
        cursor: pointer;
      }
  }

  @media screen and (max-width: 360px) {
    margin-top: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const ContactInfo = styled.div`
  @media screen and (max-width: 768px) {
    grid-column: 2/4;
  }

  @media screen and (max-width: 480px) {
    grid-column: 1/3;
  }

  h4 {
    font-weight: 700;
    font-size: 17px;
    line-height: 1.76;
    margin: 0 0 25px;
  }

  p {
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.002em;
    color: white;
    opacity: 0.7;
  }
`;

export const InfoItem = styled.div`
  color: ${themeGet('colors.textColor')};
  display: flex;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: -0.002em;
  width: 310px;

  i {
    color: white;
    opacity: 0.7;
    margin-right: 12px;
  }
  
  .phone-icon {
    margin-top: 6px;
  }

  .phone-number {
    margin-bottom: 0;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1020px) {
    flex-direction: column;
    gap: 30px;
  }

  .logo {
    width: 146px !important;
  }

  .branding {

    @media only screen and (max-width: 767px) {
      text-align: center;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0.2px;
      opacity: 0.8;
      margin: 10px 0 22px;
      width: 318px;

      @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }

  .socials {
    display: flex;
    gap: 20px;
    overflow: visible;
    
    a {
      div {
        overflow: visible !important;
      }

      img {
        transition: all 0.5s ease;
        overflow: visible;
      }

      &:hover {
        img {
          transform: translateY(-5px);
          transition: all 0.5s ease;
        }
      }
    }

    @media only screen and (max-width: 767px) {
      justify-content: center;
    }

    img {
      width: 50px !important;
      height: 50px !important;

      @media only screen and (max-width: 767px) {
        width: 35px !important;
        height: 35px !important;
      }
    }
  }

  .newsletter {
    .input {
      @media only screen and (max-width: 767px) {
        flex-direction: column;
      }
    }

    p {
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;

      @media only screen and (max-width: 767px) {
        text-align: center;
      }
    }

    .reusecore__input {
      input {
        height: 60px;
        width: 340px;
        left: 1095px;
        top: 10317px;
        border-radius: 5px;
        padding: 20px 20px 20px 60px !important;
        border: 1px solid rgba(255, 255, 255, 1);
        background-color: transparent;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        color: white;
        opacity: 0.5;

        @media only screen and (max-width: 767px) {
          width: 100%;
        }
      }

      .input-icon {
        left: 20px !important;
        right: auto;
        top: 10px !important;
        color: white;
      }
    }

    .reusecore__button.primary_hover:hover, 
    .reusecore__button.primary_hover:focus {
      @media only screen and (max-width: 767px) {
        box-shadow: inset 700px 0px 0px 0px ${colors.primaryHover};
      }
    }

    .input {
      display: flex;
      gap: 15px;
    }
    
    .reusecore__button {
      width: 160px;
      height: 60px;
      background: #FFFFFF;
      border-radius: 5px;

      @media only screen and (max-width: 767px) {
        width: 100%;
        height: 50px !important;
      }

      &:hover {
        .btn-text {
          color: white !important;
        }
      }
      
      .btn-text {
        font-size: 15px;
        font-weight: 600;
        line-height: 18px;
        text-align: center;
        color: ${colors.buttonColor};
        padding: 0;
      }
    }

    .checkbox_wrapper {
      margin-top: 20px;

      input {
        margin: 0;
        padding: 0;
      }

      .checkbox {
        padding-left: 15px;
      }

      .styled-checkbox {
        position: absolute; 
        opacity: 0; 
        z-index: 999;
        width: 100%;
        height: 25px;
        cursor: pointer;

        & + label {
          position: relative;
          cursor: pointer;
          padding: 0;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 0.24px;

          @media only screen and (max-width: 480px) {
            font-size: 12px;
          }
        }

        & + label::before {
          content: '';
          margin-right: 10px;
          display: inline-block;
          vertical-align: text-top;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 4px;
        }

        &:hover + label::before {
          background: ${colors.primary};
        }

        &:checked + label::before {
          background: ${colors.primary};
        }
        
        &:checked + label::after {
          content: '';
          position: absolute;
          left: 4px;
          top: 9px;
          background: white;
          width: 2px;
          height: 2px;
          box-shadow: 
            2px 0 0 white,
            4px 0 0 white,
            4px -2px 0 white,
            4px -4px 0 white,
            4px -6px 0 white,
            4px -8px 0 white;
          transform: rotate(45deg);
        }
      }
    }
    
  }
`;
