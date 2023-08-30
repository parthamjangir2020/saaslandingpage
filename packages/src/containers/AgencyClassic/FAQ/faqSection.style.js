import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import colors from 'common/theme/agencyClassic/colors';

const FaqSectionWrapper = styled.section`
  padding: 120px 0 180px;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 0 0 60px;
  }

  .section_heading {
    font-size: 30px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    margin-bottom: 68px;
    color: ${colors.textColor};

      
    @media only screen and (max-width: 767px) {
      margin-bottom: 40px;
      font-size: 26px;
      line-height: 38px;
    }
  }

  .icon_wrapper {
    width: auto;
  }

  .accordion_title {
    h2 {
      font-size: 17px;
      font-weight: 500;
      line-height: 22px;
      color: ${colors.textColor};
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    opacity: 0.7;
  }

  .accordion_title {
    display: flex;
    gap: 12px;
    align-items: center;

    span {
      flex-grow: 0;
      font-family: 'DM Sans', sans-serif;
      font-size: 17px;
      font-weight: 500;
      line-height: 22px;
    }
  }

  .reusecore__accordion {
    max-width: 850px;
    margin: 0 auto;

    .accordion__item {
      border-top: 0;
      margin-bottom: 12px;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.02);
      box-shadow: 0px 2px 6px rgba(187, 199, 206, 0.25);
      border-radius: 6px;

      &:last-child {
        border-bottom: 0;
        margin-bottom: 0;
      }

      .accordion__header {
        padding: 25px;
      }

      .accordion__body {
        padding: 0 24px 20px;
        margin-top: -10px;
      }
    }

    .close-icon,
    .open-icon {
      svg {
        width: 15px;
      }
    }
  }
`;

export default FaqSectionWrapper;
