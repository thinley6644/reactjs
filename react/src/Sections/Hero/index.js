
import styled from "styled-components";

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: white;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--black);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

const HeroSection = () => {
  return (
    <HomeSection id="home">
      <MainContent id="home">
        <Lb id="leftBlock">

          <Title>འབྲུག་མི་སེར་རྒྱ་ནོར་གཞི་བཟུང་ཚད་འཛིན། <br></br><br></br>
DRUK HOLDINGS & INVESTMENTS LTD</Title>
          <SubText>
          DHI is a company incorporated under the Companies
          Act of Bhutan and it holds shares in selected companies on behalf of the government.
          </SubText>
        </Lb>
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
