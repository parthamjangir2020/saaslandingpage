import styled from 'styled-components';
import quote from 'common/assets/image/agencyClassic/testimonial/left-quote.svg';
import colors from 'common/theme/agencyClassic/colors';


const TestimonialSectionWrapper = styled.section`
  padding: 100px 0 20px;
  margin: 0;
  overflow: hidden;
  background-color: #F8F9FA;

  @media (max-width: 991px) {
    padding: 60px 0 20px;
  }
  
  .read_more {
    width: 1170px;
    margin: 0 auto;
    background: #F8F9FA;
    border-radius: 0px 0px 10px 10px;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: ${colors.primary};
    box-shadow: 0px 10px 20px 0px rgb(0 0 0 / 2%);
    cursor: pointer;

    @media only screen and (min-width: 1221px) and (max-width: 1399px) {
      width: 1110px !important;
    }

    @media only screen and (max-width: 1220px) {
      width: 100% !important;
    }

    img {
      transition: transform 0.5s ease;
    }

    div {
      overflow: visible;
    }

    &:hover {
      img {
        transform: translateX(10px);
        transition: transform 0.5s ease;
      }
    }
  }

  .section_heading {
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.2px;
    text-align: center;
    margin: 0 0 80px !important;
    padding: 0 !important;

    @media only screen and (max-width: 767px) {
      font-size: 26px;
      line-height: normal;
      margin-bottom: 40px !important;
    }
  }

  .glide {
    &:hover {
      .glide__controls {
        opacity: 1;
        transition: opacity 0.5s ease;
      }
    }

    .glide__track {
      box-shadow: 0px -10px 50px rgb(92 121 154 / 12%);
    }

    .glide__slides {
      align-items: flex-start;

      li {
        background: rgba(255, 255, 255, 1);
        border-radius: 10px 10px 0 0;
        padding: 94px 80px 74px;
        gap: 100px;
        position: relative;

        @media only screen and (max-width: 1023px) {
          padding: 40px;
          gap: 40px;
          flex-direction: column;
        }
      }
    }

    max-width: 1170px;
    margin: 0 auto;
    
    .glide__slide {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      @media only screen and (max-width: 991px) {
        padding-top: 30px;
      }

      h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        margin-bottom: 12px;
      }

      .designation {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        margin-bottom: 25px;
      }
    }

    .glide__controls {
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 10px;
      width: 100%;
      opacity: 0;
      transition: all 0.5s ease;

      .reusecore__button {
        color: ${colors.primary};
         
        i {
          transition: all 0.2s ease;
          opacity: 0.6;
        }

        &:hover {
          i {
            transition: all 0.5s ease;
            opacity: 1;
            font-size: 20px;
            font-weight: bold;
          }

          .next_arrow {
            transform: translateX(10px);
          }

          .prev_arrow {
            transform: translateX(-10px);
          }
        }
      }
    }
  }
`;

const TextWrapper = styled.div`
  position: relative;
  width: calc(100% - 280px);

  @media only screen and (max-width: 1020px) {
    width: 100%;
  }

  p {
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: -0.6px;
    position: relative;
    margin-bottom: 39px;
    color: black !important;

    @media only screen and (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 30px;
    }

    &::before {
      position: absolute;
      content: '';
      width: 100px;
      height: 100px;
      background-image: url(${quote?.src});
      top: -60px;

      @media only screen and (max-width: 1023px) {
        top: -40px;
      }
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 12px;
    color: black !important;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    opacity: 0.7;
    margin-bottom: 25px;
    color: black !important;
  }

  img {
    width: 130px !important;
    
    @media only screen and (max-width: 480px) {
      width: 100px !important;
    }
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 280px !important;
  }
`;

export { TextWrapper, ImageWrapper };

export default TestimonialSectionWrapper;
