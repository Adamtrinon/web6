import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube,FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from '../Footer/footerElements';
import { animateScroll as scroll} from 'react-scroll';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Videos</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Legal Documents</FooterLinkTitle>
                            <FooterLink to='/'>TCP report</FooterLink>
                            <FooterLink to='/'>More Reports</FooterLink>
                            <FooterLink to='/'>Birds arent Real</FooterLink>
                            <FooterLink to='/'>Above's Joke</FooterLink>
                            <FooterLink to='/'>Assuming Control</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'onClick={toggleHome}>
                                Memes
                            </SocialLogo>
                            <WebsiteRights>Adam © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
