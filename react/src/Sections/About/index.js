import styled from "styled-components";
import hand from "../../assets/hand.svg";

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
 
`;

const CurvedLine = styled.div`
  width: 10rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: var(--nav2);
 
`;
const AboutText = styled.div`
  width: 75%;
  padding-bottom: 20%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Hand>
        <img src={hand} alt="" />
      </Hand>
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <AboutText>
            <Text>
              <b> Brief Description:</b><br />
              Druk Holding and Investments (DHI), the commercial arm of the
              Royal Government of Bhutan, was established in 2007 upon issuance
              of Royal Charter in 2007 "to hold and manage the existing and future
              investments of the Royal Government for the long term benefit of
              the people of Bhutan". DHI, the largest and only government-owned
              holding company in Bhutan, has shares in 10 different companies
              operating in the manufacturing, energy, natural resources,
              financial, communication, aviation, trading and real estate
              sectors. Of the 21 portfolio companies 10 are fully owned
              (DHI-Owned Companies), 4 are controlled (DHI Controlled Companies
              - 51% and above) and 7 are linked (DHI-Linked Companies -
              below 51%).The Ministry of Finance is the sole shareholder of DHI.
              <br /> <br />
              <b>Vision: </b><br />
              "To be the leading wealth management and creation organization
              that helps transform Bhutan into a globally competitive economy guided by the principles of GNH"
              <br /> <br />
              <b>Mission: </b><br />
              Safeguard and enhance national wealth for all generations of
              Bhutanese through prudent investments.
              <br /> <br />
              <b>Values:</b><br /> 
              <li>Integrity – The resolve to do the right thing for DHI, 
              for one's colleagues and for ones customers and stakeholders even
               when no one is looking.</li>
              <li>Honesty – We must conduct our business with honesty and 
                transparency and highest level of corporate governance.</li>
              <li>Excellence – We must strive for the highest possible 
                standards while conducting our business both in terms
                of our work and quality of goods and services that we provide.</li>
              <li>Prudence – We must invest with prudence to safeguard and
                enhance the national wealth.</li>
              <li>Teamwork - We must work collectively across all levels
                and partners, building strong relationships based on respect,
                understanding and cooperation.</li>
              <li>Responsibility - We must continue to be responsible in
                keeping with the values of GNH and be sensitive to the 
                environment and accountable to the people of Bhutan.</li>
            </Text>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;



