import { useState, Suspense, lazy } from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { colors } from "./utils/Theme"
import Sidebar from './components/Sidebar/Sidebar';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter} from 'react-router-dom';
import Container from './components/Main/Main';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

const HeroSection = lazy(() => import('./components/HeroSection/HeroSection'));
const Projects = lazy(() => import('./components/Projects/Projects'));


const Body = styled.div`
background-color: #0d0d11;
width: 100%;;
height: 100%;
overflow-x: hidden;
`;

//navbar CSS
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
  background-color: #14131A;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  top: 30px;
  z-index: 10;
  border-radius: 15px;
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-radius: 0;
  }
`;

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
  color:  ${({ active }) => (active ? '#DC143C' : '#FFFFFF')};
  font-weight: 300;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;

function Navbar({setActivePage}){
  return (
    <FloatingNav>
      <Nav>
        <NavContainer>
          <NavItems>
            <NavLink onClick={() => setActivePage('about')}>About</NavLink>
            <NavLink onClick={() => setActivePage('resume')}>Resume</NavLink>
            <NavLink onClick={() => setActivePage('projects')}>Portfolio</NavLink>
            <NavLink onClick={() => setActivePage('contact-me')}>Contact</NavLink>
          </NavItems>
        </NavContainer>
      </Nav>
    </FloatingNav>
  );
};

//Main App
function App() {
  const [activePage, setActivePage] = useState('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <HeroSection/>;
      case 'resume':
        return <Resume/>;
      case 'projects':
        return <Projects/>;
      case 'contact-me':
        return <Contact/>;
     
      default:
        return <HeroSection/>;
    }
  };

  return (
    <ThemeProvider theme={colors}>
      <BrowserRouter>
      <Navbar setActivePage={setActivePage}/>
      <Sidebar/>
      <Body>
        <Container>
        <Suspense fallback={<div>Loading...</div>}>
              {renderPage()}
            </Suspense>
        </Container>
      </Body>
      </BrowserRouter>
     </ThemeProvider>
  )
}

export default App
