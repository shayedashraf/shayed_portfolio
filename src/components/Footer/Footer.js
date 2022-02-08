import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+8801755883771">01755883771</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: shayedashraf21@gmail.com">shayedashraf21@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating project at a time
          </Slogan>
        </CompanyContainer>

        <SocialIcons href="https://github.com/shayedashraf">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/shayed-ashraf-035bba176/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/abir_shahed/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.facebook.com/shahed.ashraf.58/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>

    </FooterWrapper>

  );
};

export default Footer;
