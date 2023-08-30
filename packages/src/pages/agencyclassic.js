import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import ResetCSS from 'common/assets/css/style';

import Navbar from 'containers/AgencyClassic/Navbar';
import {
  GlobalStyle,
  ContentWrapper,
  agencyClassicWrapper
} from 'containers/AgencyClassic/agencyClassic.styles.js';
import { agencyTheme22 } from 'common/theme/agencyClassic';



import BannerSection from 'containers/AgencyClassic/Banner';
import Clients from 'containers/AgencyClassic/Clients';
import FeatureSection from 'containers/AgencyClassic/Feature';
import Support from 'containers/AgencyClassic/Support';
import Story from 'containers/AgencyClassic/Story';
import CaseStudy from 'containers/AgencyClassic/CaseStudies';
import TestimonialSection from 'containers/AgencyClassic/Testimonial';
import TeamSection from 'containers/AgencyClassic/Team';
import MarketingSection from 'containers/AgencyClassic/Marketing';
import FAQSection from 'containers/AgencyClassic/FAQ';
import Footer from 'containers/AgencyClassic/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';

const AgencyClassic = () => {
  return (
    <ThemeProvider theme={agencyTheme22}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title>Agency | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#10ac84" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          
          <BannerSection />
          <Clients />
          <FeatureSection />
          <Support />
          <Story />
          <CaseStudy />
          <TestimonialSection />
          <TeamSection />
          <MarketingSection />
          <FAQSection />
          <Footer />
        </ContentWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default AgencyClassic;
