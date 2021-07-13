import styled from "styled-components";
import Facebook from "../../assets/facebook-square-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const FooterContainer = styled.div`
background-color: rgb(89, 93, 102);
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
const FooterLinksContainer = styled.div`
width:100%;
max-width: 1000px;
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
   padding-top: 32px;
}

`;

const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
  flex-direction: column;
}
`;

const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 16px;
text-align: center;
width: 160px;
box-sizing: border-box;
color: black;

@media screen and (max-width: 420px){
   padding: 10px;
   margin: 0;
   width: 100%;
}
`;

const FooterLinkTitle = styled.h2`
margin-bottom: 5px;
font-size: 17px;
color: black;
`;

const FooterLink = styled.div`
margin-bottom: 0.5rem;
color: black;
text-decoration: none;
font-size: 12px;

&:hover{
    color: #0467fb;
    transition:  0.3s ease-out;
}`;
const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

const SocialMediaWrap = styled.div`
max-width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
  flex-direction: column;
}
`;

const SocialLogo = styled.div`
color: black;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-self: center;
margin-bottom: 16px;
`;

const WebsiteRights = styled.small`
color: black;
margin-bottom: 10px;
padding-right:30%;
font-weight: bold;
`;

const SocialIcons = styled.div`
display: flex;
justify-content: space-evenly;
align-items:center;
width: 240px;

img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About us</FooterLinkTitle>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact us</FooterLinkTitle>
            <FooterLink to='/'>Druk Holding & Investments Ltd.</FooterLink>
            <FooterLink to='/'>Thimphu : Bhutan</FooterLink>
            <FooterLink to='/'>P.O. Box #: 1127</FooterLink>
            <FooterLink to='/'>Email: info@dhi.bt</FooterLink>
            <FooterLink to='/'>Phone: 00975-02-336257/336258</FooterLink>
            <FooterLink to='/'>Fax: 00975-02-336259</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Other Links</FooterLinkTitle>
            <FooterLink to='/'>Ministry of Finance</FooterLink>
            <FooterLink to='/'>BCCI</FooterLink>
            <FooterLink to='/'>BBS</FooterLink>
            <FooterLink to='/'>Kuensel</FooterLink>
            <FooterLink to='/'>Economic Development Policy</FooterLink>
            <FooterLink to='/'>Fiscal Incentive</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>More Services</FooterLinkTitle>
            <FooterLink to='/'> Site Map</FooterLink>
            <FooterLink to='/'>Legal Disclaimer</FooterLink>
            <FooterLink to='/'>Downloads</FooterLink>
            <FooterLink to='/'>Private Forum</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">

          </SocialLogo>
          <WebsiteRights>
            Copyright©2018 | Druk Holding & Investments Limited
          </WebsiteRights>
          <SocialIcons>
          <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
            <a href="https://twitter.com/">
              <img src={Twitter} alt="Twitter" />
            </a>
            &nbsp;
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" />
            </a>
            &nbsp;
            <a href="mailto:thinleyd003@gmail.com?subject=Email From Your Website">
              <img src={Gmail} alt="Gmail" />
            </a>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>


  );
};
export default Footer;
