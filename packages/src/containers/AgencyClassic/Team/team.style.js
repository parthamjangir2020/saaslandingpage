import styled from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';

const TeamWrapper = styled.section`
    padding: 130px 0 0;
    color: ${colors.textColors};
    background-color: #F8F9FA;

    @media only screen and (max-width: 1024px) {
        padding: 40px 0;
    }

    .section_header {
        font-size: 30px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: -0.2px;
        text-align: center;
        padding-bottom: 160px;

        @media only screen and (max-width: 767px) {
            font-size: 26px;
            line-height: normal;
            padding-bottom: 120px;
        }
    }

    .row {
        display: flex;
        gap: 133px;

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
            gap: 60px;
        }

        .story-col {
            width: 50%;

            @media only screen and (max-width: 1024px) {
                width: 100%;
            }
        }

        .story-img {
            @media only screen and (max-width: 1024px) {
                justify-content: center;
                display: flex;
            }
        }
    }

    .reusecore__button {
        height: 55px;
        width: 170px;
        border-radius: 5px;
        background-color: white;

        @media only screen and (max-width: 480px) {
            height: 44px;
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
`

export const TeamWrapperBg = styled.section`
    background-color: #2D3132;
    padding-bottom: 80px;

    .meeting_ss {
        margin-top: -88px;
        width: 100%;
        margin-bottom: 80px;

        @media only screen and (max-width: 1024px) {
            margin-bottom: 40px;
        }
    }

    .team-col {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 48px 30px;

        @media only screen and (max-width: 1024px) {
            grid-template-columns: auto auto;
            gap: 30px;
        }

        @media only screen and (max-width: 767px) {
            grid-template-columns: 100%;
        }
    }

    .culture {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        color: white;

        img {
            width: 30px;
        }

        .culture_content {
            width: calc(100% - 30px);
        }

        h2 {
            font-size: 17px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.01em;
            margin-bottom: 15px;
        }

        p {
            font-size: 15px;
            font-weight: 400;
            line-height: 26px;
            opacity: 0.8;
            margin-bottom: 0;

            @media only screen and (max-width: 480px) {
                font-size: 14px;
                line-height: 32px;
            }
        }
    }

    .join_us {
        margin: 64px 0 0;
        padding-top: 32px;
        border-top: 1px solid rgba(255, 255, 255, .15);
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: 1024px) {
            margin-top: 40px;
            flex-direction: column;
            justify-content: center;
        }
        
        h2 {
            font-size: 32px;
            font-weight: 500;
            line-height: 48px;
            letter-spacing: -0.5px;
            width: 598px;
            color: white;

            @media only screen and (max-width: 1024px) {
                text-align: center;
            }

            @media only screen and (max-width: 767px) {
                font-size: 26px;
                line-height: 38px;
                width: 100%;
            }
        }
    }

    .reusecore__button {
        height: 55px;
        width: 172px;
        border-radius: 5px;
        background-color: white;

        @media only screen and (max-width: 480px) {
            height: 44px;
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
            color: rgba(51, 51, 51, 1);
        }
    }
`;

export default TeamWrapper;