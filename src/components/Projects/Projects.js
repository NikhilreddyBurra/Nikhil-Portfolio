import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="certifications">
    <SectionDivider />
    <SectionTitle main>Certifications</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, view }) =>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            <CardInfo>{description}</CardInfo>
            <UtilityList>
              <ExternalLinks href={view}>View</ExternalLinks>
            </UtilityList>
          </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;