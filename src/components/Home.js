import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//I used styled-components to consolidate css & initialize functional components

const Wrapper = styled.div`
padding-top: 50px;
background: #f2f2f2;
height: 100%;
flex-shrink: 0;
flex-flow: row wrap;
padding: 20px;
justify-content: space-around;
box-shadow: 0 3px 6px #999, 0 3px 6px #999;
align-content: flex-start;
overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  align-items: center;
  min-height: 290px;
  height: calc(100% - 560px);
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 290px;
  height: calc(100% - 560px);
  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }
`;

const SearchSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  max-width: 584px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;
  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
`;

const SearchIcon = styled.span`
  color: #9aa0a6;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
`;

const MicIcon = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 40px;
  line-height: 44px;
  height: 44px;
  svg {
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  padding: 0 20px;
  bottom: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  align-items: center;
  height: 99.5px;
  font-size: 14px;
  background: #f2f2f2;
  justify-content: space-between;
  width: 100vw;

  @media only screen and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`;

const FooterLinks = styled(Link)`
  display: flex;
  padding: 0 8px;
  align-items: center;
  text-decoration: none;
  color: #70757a;
  svg {
    height: 24px;
    width: 24px;
  }
`;

const LeftFooterLinks = styled.div`
  display: flex;
  padding: 10px;
  margin-left: 10px;
  justify-content: flex-start;
  min-width: 30%;
  order: 1;
`;

const RightFooterLinks = styled.div`
  display: flex;
  padding: 10px;
  margin-right: 16px;
  justify-content: flex-end;
  min-width: 30%;
  order: 3;
`;

const CenterFooterLink = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 auto;

  align-items: center;
  order: 2;
  @media only screen and (max-width: 1200px) {
    order: 0;
    width: 100%;
    justify-content: center;
  }
`;

const ImageLink = styled.div`
  display: flex;
  height: 14px;
  margin-right: 6px;
`;

const Span = styled.div`
flex-shrink: 0;
  flex-grow: 1;
  box-sizing: border-box;
`;

//This is where we consolidate our functional components to be further defined with routes, methods, etc.
//Gets exported to App.js
const Home = () => {
  return (
    <Container>
      <Wrapper>
      <SubContainer>
      <LogoSection>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google-logo"
        />
      </LogoSection>
      </SubContainer>
      <SearchSection>
        <Form action="/" method="GET" role="search">
          <Search>
            <SearchIcon>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </SearchIcon>
            <SearchInput type="text" />
            <MicIcon>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                />
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                />
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                />
              </svg>
            </MicIcon>
          </Search>
        </Form>
        <ButtonSection>
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </ButtonSection>
      </SearchSection>
      </Wrapper>
      <Span></Span>
      <Footer data-sfe="true" data-sfsw="1200" jsaction="rcuQ6b:npT2md">
        <LeftFooterLinks>
          <FooterLinks to="/advertising">Advertising</FooterLinks>
          <FooterLinks to="/business">Business</FooterLinks>
          <FooterLinks to="/">How Search Works</FooterLinks>
        </LeftFooterLinks>

        <CenterFooterLink>
          <ImageLink>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"></img>
          </ImageLink>
          <FooterLinks to="/">Carbon neutral since 2007</FooterLinks>
        </CenterFooterLink>

        <RightFooterLinks>
          <FooterLinks to="/privacy">Privacy</FooterLinks>
          <FooterLinks to="/terms">Terms</FooterLinks>
          <FooterLinks to="/settings">Settings</FooterLinks>
        </RightFooterLinks>
      </Footer>
      
    </Container>
  );
};

export default Home;
