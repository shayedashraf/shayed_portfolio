import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello,I am  <br />
          Shayed Ashraf

        </SectionTitle>
        <SectionText>To shayed work in the web development sector in a progressive organization that allows me the opportunity to update my knowledge to the latest
          trends and be a part of a diverse and dynamic team that adds to both my personal and professional growth.</SectionText>
        <Button onClick={() => window.location = 'https://www.google.com/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;