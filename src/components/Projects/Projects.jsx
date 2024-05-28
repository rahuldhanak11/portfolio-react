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
  `;

  const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: crimson;
  `;

  const Line = styled.div`
    width: 10%;
    height: 6px;
    border-radius: 5px;
    background-color: crimson;
    margin-top: 20px;
    margin-bottom: 20px;
  `;

  const FloatingNav = styled.div`
  width: 922px;
  transform: translateX(50%);
  margin-top: 30px;

  @media screen and (max-width: 960px){
    width: 100%;
    transform: translateX(0);
  }
`
  
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

// function PortfolioNav ({setActivePage}) {
//   <FloatingNav>
//   <Nav>
//     <NavContainer>
//       <NavItems>
//           <NavLink onClick={() => setActivePage('rickshare')}>RickShare</NavLink>
//           <NavLink onClick={() => setActivePage('prodigy-infotech')}>Prodigy Infotech</NavLink>
//           <NavLink onClick={() => setActivePage('graphic-design')}>Graphic Design</NavLink>
//       </NavItems>
//     </NavContainer>
//   </Nav>
//   </FloatingNav>
// }


  const Projects = () => {
    const [activePage, setActivePage] = useState('rickshare');

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
          {renderPage()}
          </ProjectContainer>
      </div>
    )
  }

  export default Projects
