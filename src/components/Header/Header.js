import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '25px'}}>
          <DiCssdeck size="4rem"   /> <Span>Nikhil's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#certifications">
          <NavLink>Certifications</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/nikhilreddy-burra-198619184">
        <AiFillLinkedin size="3rem"  />
      </SocialIcons>
      <SocialIcons href="https://github.com/NikhilreddyBurra">
        <AiFillGithub size="3rem"  />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/nikhil_reddy_since_1998/">
        <AiFillInstagram size="3rem"  />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/nikhilreddy.nikki.5">
        <AiFillFacebook size="3rem"  />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
