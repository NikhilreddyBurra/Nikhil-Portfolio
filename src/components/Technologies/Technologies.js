import React from 'react';
import { DiAws, DiDocker, DiFirebase, DiGithub, DiGoogleCloudPlatform, DiLinux, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with different types of tools in the cloud-devops field.
    </SectionText>
    <List>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>AWS</ListTitle>
          <ListParagraph>
            Experience with <br />
            IAM, EC2, RDS, VPC <br />
            Cloudformation etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleCloudPlatform size="3rem" />
        <ListContainer>
          <ListTitle>GCP</ListTitle>
          <ListParagraph>
            Experience with <br />
            Cloudrun, CloudFunctions <br />
            SQL, LogMetrics etc.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>Docker</ListTitle>
          <ListParagraph>
            Experience with <br />
            Building Docker Images.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size="3rem" />
        <ListContainer>
          <ListTitle>Linux</ListTitle>
          <ListParagraph>
            Experience with <br />
            Centos, RHEL, Ubuntu.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Kubernetes</ListTitle>
          <ListParagraph>
            Experience with <br />
            Managed Kuberenetes service from AWS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithub size="3rem" />
        <ListContainer>
          <ListTitle>CI/CD</ListTitle>
          <ListParagraph>
            Experience with <br />
            CI/CD Pipelines Using Github Actions.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
