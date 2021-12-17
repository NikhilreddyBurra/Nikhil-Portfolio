import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+91 9966262792">+91 9966262792</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:nikhilburra402@gmail.com">nikhilburra402@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Thanks for taking time to checkout my profile.</Slogan>
       </CompanyContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
