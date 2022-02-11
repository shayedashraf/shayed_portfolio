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
        <SectionText>I am CSE graduate from UIU. I am working with RectJS and NodeJS. I Have hands-on experience with SQA and DevOps.To  work in the Software Engineering sector in a progressive organization that allows me the opportunity to update my knowledge
          to the latest trends and be a part of a diverse and dynamic team that adds to both my personal and professional growth.</SectionText>
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1WgbjcCTv9NQtNXY3hNlrQr0sFKkH6aTj/view?usp=sharing'}>Download CV</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;