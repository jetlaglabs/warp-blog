import styled from "styled-components";
import Theme from "../../styles/theme";
import Typed from 'react-typed';

export const StyledHeader = styled.header`
  display: flex;
  background: ${Theme.components.header.background} no-repeat bottom;
  background-size: contain;
  background-attachment: scroll;
  @media screen and (min-width: 800px) {
    background-attachment: fixed;
  }
  flex-direction: column;
  height: ${Theme.components.header.height};
  border-bottom: 2px #ededed solid;
  color: #fff;
  @media (max-width: ${Theme.breakpoints.sm}) {
    height: 50vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  margin-top: -10px;
  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-top: -25px;
    font-size: .75em;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  display: block;
  text-shadow: 0 5px 18px rgba(0, 0, 0, .07);
  font-size: 55px;
  @media (max-width: ${Theme.breakpoints.sm}) {
    font-size: 36px;
  }
  color: #111111;
  text-transform: uppercase;
`;

export const ColorTitle = styled.span`
  background: linear-gradient(135deg, ${Theme.layout.primaryColor} 55%, ${Theme.layout.linkColor} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SupportedBy = styled.h6`
  font-size: 13px;
  color: #111111;
  font-weight: 400;
  opacity: .55;
  text-transform: uppercase;
  line-height: 1;
`;

export const Description = styled.h2`
  color: #111111;
  margin: 0;
  font-size: 15px;
  letter-spacing: 0.05rem;
  font-weight: 400;
  text-transform: uppercase;
  * {
    opacity: .85;
  }
  &:hover {
    * {
      opacity: 1;
    }
  }
  ::selection {
    background: ${Theme.layout.linkColor}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${Theme.layout.linkColor}; /* Gecko Browsers */
  }
`;

export const StyledTopics = styled(Typed)`
  color: ${Theme.layout.primaryColor};
  font-size: 17px;
`;

export const StyledCoverCredit = styled.a`
  align-self: flex-end;
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 10px;
  background-color: #ffffff;
  color: ${Theme.layout.primaryColor};
  font-weight: 500;
  opacity: .55;
  text-transform: uppercase;
  line-height: 1;
  padding-left: 2px;
  letter-spacing: 2px;
  &:hover {
    opacity: 1;
  }
`;

export const DownArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
  font-size: 22px;
  text-transform: uppercase;
  color: #d8d8d8;
  span {
    color: ${Theme.layout.primaryColor};
  }
`;
