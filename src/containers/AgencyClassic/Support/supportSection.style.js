import styled from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';

const SupportWrapper = styled.div`
    .row {
        display: flex;
        gap: 40px;

        @media only screen and (max-width: 1023px) {
            flex-direction: column;
        }
    }

    .horizontal-scroll {
        display: flex;
        gap: 25px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        width: 630px;
        
        &::-webkit-scrollbar {
            display: none;
        }
        
        &__item {
            align-items: center;
            display: flex;
            justify-content: center;
            scroll-snap-align: start;
        }
    }

    .support-col {
        border-radius: 20px;
        padding: 60px 0 64px 60px;
        overflow: hidden;
        color: white;

        @media only screen and (max-width: 1024px) {
            padding: 30px;
        }

        @media only screen and (max-width: 768px) {
            /* padding: 30px; */
            border-radius: 10px;
        }
    }

    .primary {
        background-color: ${colors.primary};

        .reusecore__button {
            span.btn-text {
                color: white;
                padding-left: 0;
                padding-right: 8px;
            }
        }

        p {
            opacity: 0.9;
        }
    }

    .secondary {
        background-color: ${colors.secondary};

        p {
            opacity: 0.8;
        }

        .reusecore__button {
            span.btn-text {
                padding-left: 0;
                padding-right: 8px;
            }
        }
    }

    .subheading {
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        opacity: 0.7;
    }

    h2 {
        font-size: 30px;
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 14px;
        width: 498px;

        @media only screen and (max-width: 1400px) {
            width: 100%;
        }

        @media only screen and (max-width: 767px) {
            font-size: 26px;
            line-height: 36px;
        }
    }

    p {
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;
        margin-bottom: 25px;

        @media only screen and (max-width: 480px) {
            font-size: 14px;
            line-height: 32px;
        }
    }

    .learn-more {
        display: flex;
        align-items: center;
    }

    .reusecore__button {
        width: auto;
        height: auto;
        min-width: auto;
        min-height: auto;
    }

    .support-slider {
        margin-top: 60px;
        cursor: grab;

        @media only screen and (max-width: 767px) {
            margin-top: 30px;
            gap: 20px;
        }

        img {
            @media only screen and (max-width: 767px) {
                width: 65px;
            }
        }
    }

    .graph {
        display: flex;
        gap: 50px;
        margin-top: 60px;

        @media only screen and (max-width: 767px) {
            margin-top: 30px;
        }

        h2 {
            width: auto;
            font-family: DM Sans;
            font-size: 36px;
            font-weight: 500;
            line-height: 47px;
            margin-bottom: 5px;

            @media only screen and (max-width: 767px) {
                font-size: 26px;
            }
        }

        p {
            font-weight: 500;
            line-height: 19px;
            margin: 0;
            opacity: 0.6;
        }
    }
`
export default SupportWrapper;