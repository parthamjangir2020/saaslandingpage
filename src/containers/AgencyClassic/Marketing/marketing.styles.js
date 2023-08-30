import styled from 'styled-components';
import colors from 'common/theme/agencyClassic/colors';

const MarketingWrapper = styled.section`
    margin: 150px 0 0;
    color: ${colors.textColors};
    
    @media only screen and (max-width: 1023px) {
        margin: 60px 0;
    }

    .section_header {
        font-size: 30px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: -0.2px;
        text-align: center;
        margin-bottom: 90px;
        
        @media only screen and (max-width: 767px) {
            font-size: 26px;
            line-height: 40px;
            margin-bottom: 40px;
        }
    }

    .row {
        display: grid;
        gap: 40px;
        grid-template-columns: 630px auto;

        @media only screen and (max-width: 1400px) {
            gap: 20px;
            grid-template-columns: calc(50% - 10px) calc(50% - 10px);
        }

        @media only screen and (max-width: 1023px) {
            gap: 20px !important;
            grid-template-columns: 100%;
        }

        img {
            width: 100%;
        }

        .main_ad {
            position: relative;
            overflow: hidden;
            border-radius: 10px;

            @media only screen and (max-width: 767px) {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            img {
                filter: brightness(0.8);
            }

            .learn-more img {   
                filter: brightness(1);
            }

            &:hover {
                img {
                    transform: scale(1.2);
                    transition: all .5s ease;    
                    filter: brightness(1);

                    @media only screen and (max-width: 767px) {
                        transform: scale(1.05);
                    }
                }

                .learn-more img {
                    transform: none;
                }
            }

            .content {
                padding: 0 30px;
                bottom: 40px !important;
                position: absolute;
                color: white;

                @media only screen and (max-width: 1400px) {
                    width: 100%;
                }

                @media only screen and (max-width: 480px) {
                    position: static;
                    color: ${colors.textColor};
                    padding: 20px 10px 20px 20px;
                    border: 1px solid rgba(226, 230, 235, 1);
                    margin-top: -4px;
                }

                h2 {
                    @media only screen and (max-width: 480px) {
                        width: 100%;
                        font-size: 18px;
                        line-height: 28px;
                        margin: 12px 0;
                    }
                }

                p {
                    @media only screen and (max-width: 480px) {
                        margin: 0;
                    }
                }
            }

            img {
                position: relative;
                transition: all .5s ease;
            }
        }

        p {
            font-size: 14px;
            font-weight: 500;
            line-height: 17px;
        }

        h2 {
            font-size: 22px;
            font-weight: 500;
            line-height: 35px;
            margin: 15px 0 20px;
            width: 570px;
                
            @media only screen and (max-width: 1023px) {
                width: 100%;
                font-size: 26px;
                line-height: 40px;
            }

            @media only screen and (min-width: 1023px) and (max-width: 1400px) {
                width: calc(100% - 20px);
                font-size: 18px;
                line-height: 28px;
            }
            
            @media only screen and (max-width: 480px) {
                font-size: 18px;
                line-height: 28px;
            }
        }

        .single_ad {
            display: grid;
            margin-bottom: 30px;
            grid-template-columns: 250px auto;
            overflow: hidden;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;

            @media only screen and (max-width: 767px) {
                border-bottom-left-radius: 0;
            }

            img {
                filter: brightness(0.8);
            }

            .learn-more img {   
                filter: brightness(1);
            }

            &:hover {
                img {
                    transform: scale(1.05);
                    transition: all .5s ease;    
                    filter: brightness(1);
                }

                .learn-more img {
                    transform: none;
                }
            }
            
            @media only screen and (max-width: 1220px) {
                margin-bottom: 20px;
                grid-template-columns: 220px auto;
            }

            @media only screen and (min-width: 1220px) and (max-width: 1400px) {
                grid-template-columns: 214px auto;
            }

            @media only screen and (min-width: 1023px) and (max-width: 1221px) {
                grid-template-columns: 180px auto;
            }
        
            @media only screen and (max-width: 767px) {
                grid-template-columns: 100%;
            }

            .ad_banner {
                width: 100%;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                transition: all .5s ease;
                border-bottom-left-radius: 0;
                /* filter: brightness(0.8); */
        
                @media only screen and (max-width: 767px) {
                    width: 100%;
                    border-radius: 10px;
                }
            }
        }

        .related_ads {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .content {
                padding: 20px 42px 25px 30px;
                border-top: 1px solid rgba(226, 230, 235, 1);
                border-right: 1px solid rgba(226, 230, 235, 1);
                border-bottom: 1px solid rgba(226, 230, 235, 1);

                @media only screen and (max-width: 1400px) {
                    padding: 20px 10px 20px 20px;
                }

                @media only screen and (max-width: 767px) {
                    border-left: 1px solid rgba(226, 230, 235, 1);
                }

                p {
                    opacity: 0.6;

                    @media only screen and (max-width: 1400px) {
                        margin-bottom: 0;
                    }
                }

                h2 {
                    width: auto;
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 28px;
                    margin: 15px 0 18px;
                    height: 84px;

                    @media only screen and (max-width: 1400px) {
                        margin: 20px 0;
                        height: auto;
                    }

                    @media only screen and (min-width: 1220px) and (max-width: 1400px) {
                        margin: 18px 0;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    @media only screen and (min-width: 1023px) and (max-width: 1221px) {
                        margin: 5px 0;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
        
                    @media only screen and (max-width: 767px) {
                        height: auto;
                        font-size: 26px;
                        line-height: 40px;
                    }

                    @media only screen and (max-width: 480px) {
                        font-size: 18px;
                        line-height: 28px;
                    }
                }
            }
        }

        @media only screen and (max-width: 1023px) {
            flex-direction: column;
            gap: 60px;
        }

        .story-col {
            width: 50%;

            @media only screen and (max-width: 1023px) {
                width: 100%;
            }
        }

        .story-img {
            @media only screen and (max-width: 1023px) {
                justify-content: center;
                display: flex;
            }
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

        .btn-text {
            font-size: 15px;
            font-weight: 600;
            line-height: 18px;
            text-align: center;
            padding-left: 0;
        }
    }
`
export default MarketingWrapper;