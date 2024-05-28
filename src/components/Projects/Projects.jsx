  import React from 'react'
  import styled from 'styled-components'
import Rickshare from './Rickshare';
import GraphDes from './GraphDes';
import Prodigy from './Prodigy';
import { useState } from 'react';

  const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 50px;
    border-radius: 11px;

    @media screen and (max-width: 960px){
      padding: 10px;
    }
  `;

  const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: crimson;

    @media screen and (max-width: 960px) {
      margin: 20px 20px 0px 20px;
    }
  `;

  const Line = styled.div`
    width: 10%;
    height: 6px;
    border-radius: 5px;
    background-color: crimson;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 960px) {
      margin: 20px;
    }
  `;

  
const Nav = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
  max-width: 1200px;
  z-index: 1;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  padding: 0 6px;
  list-style: none;
  :hover {
    color: #DC143C;
  }
`;

const NavLink = styled.a`
  color: ${({ active }) => (active ? '#DC143C' : '#FFFFFF')};
  font-weight: 300;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
`;

const DropdownContainer = styled.div`
  text-align: center;
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block; 
  }
`;

const CustomDropdown = styled.select`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #413F4B;
  border-radius: 5px;
  background-color: #14131A;
  color: #CCC7C7;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  &:focus {
    outline: none;
  }
`;

const CustomOption = styled.option`
  background-color: #14131A;
  color: #CCC7C7;
  padding: 10px;
  border-radius: 10px;
  width: 100%; 
`;


  const Projects = () => {
    const [activePage, setActivePage] = useState('rickshare');

    const handleDropdownChange = (event) => {
      setActivePage(event.target.value);
    };

  const renderPage = () => {
    switch (activePage) {
      case 'rickshare':
        return <Rickshare/>;
      case 'web-dev':
        return <Prodigy/>;
      case 'graphic-design':
        return <GraphDes/>;
     
      default:
        return <Rickshare/>;
    }
  };
    return (
      <div id='projects'>
        <ProjectContainer>
          <Title>PORTFOLIO</Title>
          <Line />
          
    <NavContainer>
      <NavItems>
          <NavLink active={activePage === 'rickshare'} onClick={() => setActivePage('rickshare')}>RickShare</NavLink>
          <NavLink active={activePage === 'web-dev'} onClick={() => setActivePage('web-dev')}>Web-Development</NavLink>
          <NavLink active={activePage === 'graphic-design'} onClick={() => setActivePage('graphic-design')}>Graphic Design</NavLink>
      </NavItems>
    </NavContainer>
    <DropdownContainer>
          <CustomDropdown value={activePage} onChange={handleDropdownChange}>
            <CustomOption value='rickshare'>RickShare</CustomOption>
            <CustomOption value='web-dev'>Web-Development</CustomOption>
            <CustomOption value='graphic-design'>Graphic Design</CustomOption>
          </CustomDropdown>
        </DropdownContainer>
          {renderPage()}
          </ProjectContainer>
      </div>
    )
  }

  export default Projects
