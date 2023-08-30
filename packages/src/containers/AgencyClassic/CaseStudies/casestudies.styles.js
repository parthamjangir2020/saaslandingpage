import styled from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';

const CaseStudies = styled.div`
    background: rgba(241, 246, 244, 1);
    padding: 100px 0 95px;

    @media only screen and (max-width: 1023px) {
        padding: 60px 0;
    }

    .row {
        display: flex;
        gap: 40px;

        @media only screen and (max-width: 1023px) {
            flex-direction: column;
            gap: 0;
        }

    }

    .case_study {
        margin-bottom: 70px;

        @media only screen and (max-width: 1023px) {
            margin-bottom: 40px;
        }

        img {
            border-radius: 10px;
            width: 100% !important;
            transition: all 0.5s ease;
            filter: brightness(0.8);

            &:hover {
                transform: scale(1.1);
                transition: all 0.5s ease;
                cursor: pointer;
                filter: brightness(1);
            }
        }

        p {
            font-size: 13px;
            font-weight: 700;
            line-height: 17px;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            margin-top: 25px;
            margin-bottom: 10px;
            font-family: 'DM Sans', sans-serif;
            opacity: 0.6;
        }

        h2 {
            font-size: 20px;
            font-weight: 500;
            line-height: 26px;
            margin-bottom: 20px;
        }
    }

    .sectionTitle {
        font-size: 30px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: -0.2px;
        text-align: center;
        margin-bottom: 90px;

        @media only screen and (max-width: 1023px) {
            margin-bottom: 40px;
        }
        

        @media only screen and (max-width: 767px) {
            font-size: 26px;
            line-height: 38px;
        }
    }

    .learn-more {
        display: flex;
        align-items: center;

        img {
            filter: brightness(1);

            &:hover {
                transform: none;
            }
        }
    }

    .reusecore__button {
        width: auto;
        height: auto;
        min-width: auto;
        min-height: auto;

        .btn-text {
            padding: 0 5px 0 0;
            font-size: 15px;
            font-weight: 600;
            line-height: 18px;
        }
    }

    .explore-btn {
        margin: 0 auto;
        display: block;
        background: #F1F6F4;
        border: 1.5px solid ${colors.primary};
        border-radius: 5px;
        
        &:hover {
            .btn-text {
                color: white;
            }
        }

        .btn-text {
            font-size: 15px;
            font-weight: 600;
            line-height: 18px;
            color: ${colors.primary};
        }
    }
`
export default CaseStudies;