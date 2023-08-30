import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import { clients } from 'common/data/AgencyClassic';
import { Fade } from 'react-reveal';
import Logo from 'common/components/UIElements/Logo';

import SectionWrapper, {
	ClientWrapper,
	ImageSlider,
	ImageSlide,
} from './clients.style';

const Clients = () => {
	return (
		<SectionWrapper id="experience">
			<Container width="1400px">
				<ClientWrapper>
					<div className="client__text">
						<Text as="span" content={'We have successfully worked with'} />
					</div>
					<ImageSlider>
						<ImageSlide>
							{clients.map((item, index) => (
								<Logo key={`slide1__key_0${index}`} href="#" logoSrc={item} />
							))}
						</ImageSlide>
						<ImageSlide>
							{clients.map((item, index) => (
								<Logo key={`slide1__key_1${index}`} href="#" logoSrc={item} />
							))}
						</ImageSlide>
					</ImageSlider>
				</ClientWrapper>
			</Container>
		</SectionWrapper>
	);
};

export default Clients;
