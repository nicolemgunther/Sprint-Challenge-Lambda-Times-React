import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopBarSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  ${props => (props.type === 'left' ? `
    justify-content: none;
    flex: 1;
    font-size: 11px;
  ` : null)}

  ${props => (props.type === 'center' ? `
  justify-content: center;
  flex: 3;
  font-size: 9px;
  ` : null)}

  ${props => (props.type === 'right' ? `
  justify-content: flex-end;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  ` : null)}
`;

const TopBarSpan = styled.span`
  cursor: pointer;

  ${props => (props.type === 'left' ? `
    margin-right: 25%;
    font-weight: bold;
  ` : null)}

  ${props => (props.type === 'center' ? `
    margin-right: 5%;

    &:last-child{
      margin-right: 0;
    }
    
    :hover{
      text-decoration: underline;
    }
  ` : null)}
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TopBarSection type='left'>
          <TopBarSpan type='left'>TOPICS</TopBarSpan><TopBarSpan type='left'>SEARCH</TopBarSpan>
        </TopBarSection>
        <TopBarSection type='center'>
          <TopBarSpan type='center'>GENERAL</TopBarSpan><TopBarSpan type='center'>BROWNBAG</TopBarSpan><TopBarSpan type='center'>RANDOM</TopBarSpan><TopBarSpan type='center'>MUSIC</TopBarSpan><TopBarSpan type='center'>ANNOUNCEMENTS</TopBarSpan>
        </TopBarSection>
        <TopBarSection type='right'>
          <TopBarSpan>LOG IN</TopBarSpan>
        </TopBarSection>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;