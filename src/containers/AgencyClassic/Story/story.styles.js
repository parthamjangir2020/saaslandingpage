import styled from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';

const StoryWrapper = styled.div`
    margin: 200px 0;
    color: ${colors.textColors};

    @media only screen and (max-width: 1023px) {
        margin: 60px 0;
    }

    .row {
        display: flex;
        gap: 133px;
        align-items: center;

        @media only screen and (max-width: 1023px) {
            flex-direction: column;
            gap: 60px;
        }

        .story-col {
            width: 50%;

            @media only screen and (max-width: 1023px) {
                width: 100%;
                text-align: center;
            }
        }

        .story-img {
            @media only screen and (max-width: 1023px) {
                justify-content: center;
                display: flex;
            }
        }
    }

    .subheading {
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: -0.01em;
        color: ${colors.primary};
        margin-bottom: 13px;
    }

    h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 47px;
        letter-spacing: -0.01em;
        margin-bottom: 16px;

        @media only screen and (max-width: 767px) {
            font-size: 26px;
        }
    }

    p {
        font-size: 22px;
        font-weight: 500;
        line-height: 45px;
        letter-spacing: -0.02em;

        @media only screen and (max-width: 767px) {
            font-size: 20px;
            line-height: 40px;
        }
    }

    .description {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 35px;
        margin-bottom: 35px;

        @media only screen and (max-width: 480px) {
            font-size: 14px;
            line-height: 32px;
        }
    }

    .reusecore__button {
        height: 55px;
        width: 170px;
        border-radius: 5px;

        @media only screen and (max-width: 480px) {
            height: 44px;
        }

        .btn-text {
            font-size: 15px;
            font-weight: 600;
            line-height: 18px;
            text-align: center;
        }
    }
`
export default StoryWrapper;