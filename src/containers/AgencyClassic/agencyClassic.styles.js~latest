import styled, { createGlobalStyle, keyframes } from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';
import { width, height, color, space, boxShadow, borderRadius } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

const Fade = keyframes`
  0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const FadeUp = keyframes`
  0% {
		opacity: 0;
    transform: scale(.5)
	}

	100% {
		opacity: 1;
    transform: scale(1)
	}
`;

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Inter', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans', sans-serif;
  }

  section {
    position: relative;
  }

  .agencyClassic_navbar{
      .hamburgMenu__bar {
     &>span {
        background: ${colors.white} !important;
      }
    }
    }
  
  .sticky-outer-wrapper.sticky-nav-active {
    .agencyClassic_navbar{
      .hamburgMenu__bar {
     &>span {
        background: ${colors.primary} !important;
      }
    }
    }
  }

  .agency-classic-mobile-nav-wrapper{
    padding:60px 70px;
    
    ul{
      li{
        margin-bottom: 35px;
        a{
          display: block;
          color: #20201d;
          font-size: 22px;
          font-weight: 400;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          position: relative;
        }

        &.is-current{
          a::before{
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #10ac84;
            position: absolute;
            top: calc(50% - 8px / 2);
            left: -20px;
          }
        }
      }
    }

  }

  .agency-classic-mobile-nav{

  }
  
  .container {
    @media only screen and (max-width: 480px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .primary_hover {
    &:hover,
    &:focus {
      transition: all .5s ease;
      /* transform: translateY(-6px); */
      box-shadow: inset 200px 0px 0px 0px ${colors.primaryHover};
      color: ${colors.white} !important;

      &.btn-text {
        color: ${colors.white} !important;
      }
    }
  }

  .hover_links {
    .btn-text {
        transition: all .3s ease;
    }
    
    &:hover {
      .btn-text {
          margin-right: 10px;
          transition: all .3s ease;
      }
    }
  }

  .pulse:hover, 
  .pulse:focus {
    animation: pulse 1s;
    box-shadow: 0 0 0 2em ${colors.primary};
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 ${colors.primary}; }
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }

    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }

      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;

        @media (max-width: 767px) {
          margin-bottom: 30px;
        }

        li{
          margin-bottom: 35px;

          @media (max-width: 767px) {
            margin-bottom: 25px;
          }

          a{
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.2px;
            font-weight: 400;
            color: ${colors.textColor};
            position: relative;
            transition: 0.15s ease-in-out;

            @media (max-width: 767px) {
              font-size: 18px;
            }

            &:hover {
              color: ${colors.primary};
            }

            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${colors.primary};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }

          &.is-current {
            a {
              color: ${colors.primary};

              &:before{
                opacity: 1;
              }
            }
          }
        }
      }

      .navbar_drawer_button button{
        width: 100%;
        background-color: ${colors.primary};
        font-size: 15px;
        height: 45px;

        span {
          padding: 0
        }
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }

      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: ${colors.primary};
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  .video-modal{
    background: rgba(0,0,0,0.6) !important;
    border: 0 !important;
    animation: ${Fade} .5s ease-out forwards !important;

    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      animation: ${FadeUp} .7s ease-out forwards !important;
    }
  }

  .reuseModalOverlay,
  .modalCloseBtn{
    animation: ${Fade} .5s ease-out forwards !important;
  }

  .video-modal{
    background: transparent !important;
    border: 0!important;

    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;

  .sticky-nav-active {
    .agencyClassic_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;

      .hamburgMenu__bar {
        span {
          background-color: red;
        }
      }

      .main-logo {
        display: none;
      }

      .logo-alt {
        display: block;
      }

      .main_menu {
        li {
          a {
            color: white;

            &:hover {
              color: ${colors.primary};
            }
          }

          &.is-current {
            a {
              color: ${colors.primary};
            }
          }
        }
      }
    }

    .hamburgMenu__bar {
      > span {
        background: white !important;
      }
    }
  }

  .agencyClassic_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;

    .logo-alt {
      display: none;
    }

    .main_menu {
      margin-right: 50px;

      li {
        display: inline-block;
        padding-left: 20px;
        padding-right: 20px;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }

        &.is-current {
          a {
            color: ${colors.primary};
          }
        }

        a {
          font-size: 15px;
          line-height: 18px;
          letter-spacing: 0.2px;
          font-weight: 400;
          color: #fff;
          transition: 0.15s ease-in-out;

          &:hover {
            color: ${colors.primary};
          }
        }
      }

      @media (max-width: 991px) {
        display: none;
      }
    }

    .navbar_button {
      button {
        width: 132px;
        height: 42px;
        backgorund-color: white !important;
      }

      @media (max-width: 991px) {
        display: none;
      }
    }

    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
    }
  }

  overflow: hidden;

  .reusecore__navbar {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.3s ease;

    .reusecore__button {
      font-size: 15px;
      width: 132px;
      height: 42px;
      font-weight: semibold;
      background-color: ${colors.primary} !important;
      @media only screen and (max-width: 480px) {
        background-color: ${colors.white} !important;
      }

      span {
        padding: 0;
      }
    }

    .hamburgMenu__bar {
      margin-left: 8px;

      > span {
        background-color: ${themeGet('colors.white', '#ffffff')};
        @media only screen and (max-width: 480px) {
          background-color: ${themeGet('colors.primary', '#10ac84')};
        }
      }
    }
  }

  .sticky-nav-active {
    .reusecore__navbar {
      background-color: white;
      box-shadow: 0px 3px 8px 0px rgba(43 83 135 / 8%);
      padding: 15px auto;

      .reusecore__button {
        color: ${colors.white};
        background-color: ${colors.primary} !important;
      }

      .hamburgMenu__bar > span {
        color: ${colors.textColor};
      }

      .main_menu {
        li {
          a {
            color: ${colors.textColor};

            &:hover {
              color: ${colors.primary};
            }
          }
        }
      }
    }
  }
  /* Style system supported prop */
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;
