import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hello Everyone, <br />
       This is NikhiReddy Burra.
     </SectionTitle>
     <SectionText>
       I am a Cloud Based DevOps Engineer,Available For Immediate Hiring.
     </SectionText>
     <Button onClick={() => window.open("mailto:nikhilburra402@gmail.com")}>Mail</Button>
   </LeftSection>
 </Section>
);

export default Hero;