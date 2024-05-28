import React, { useState } from 'react';
import { Bio } from '../../data/Constants';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { FiMail, FiMapPin, FiLinkedin, FiInstagram, FiGithub, FiPhoneCall } from 'react-icons/fi';

const Container = styled.div`
  margin-left: 68px;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 337px;
  height: 550px;
  border: 2px solid crimson;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #0d0d11;
  border-radius: 40px;
  z-index: 10;

  @media screen and (max-width: 960px) {
    position: absolute;
    margin: 0;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: ${props => (props.isOpen ? '550px' : '10%')};
    width: 90%;
    border-radius: 13px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

const Photo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10%;
  background: url(/linkedin_photo.jpeg) no-repeat center center/cover;
  margin-top: 45px;
  margin-bottom: 30px;
  z-index: 1;
`;

const Box = styled.div`
  width: 50%;
  height: 30px;
  border-radius: 11px;
  background-color: #2d2c35;
`;

const Line = styled.div`
  width: 70%;
  height: 1px;
  background-color: #726f6f;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
  overflow-y: hidden;
  display: ${props => (props.isOpen ? 'block' : 'block')};
  @media screen and (max-width: 960px){
    font-size: 20px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 300;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #ffffff;
  margin-top: 4px;
`;

const Icon1 = styled.div`
height: 50px;
  display: flex;
  flex-direction: row;
  font-size: 15px;
  align-items: center;
  color: #ffffff;
  
  overflow-y: hidden;
`;

const Icon2 = styled.div`
height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  
  margin-right: 63px;
  overflow-y: hidden;
`;

const Icon3 = styled.div`
height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  margin-bottom: 40px;
  margin-right: 110px;
  overflow-y: hidden;
`;


const MailIcon = styled(FiMail)`
  margin-right: 18px;
`;

const LocationIcon = styled(FiMapPin)`
  margin-right: 18px;
`;

const CallIcon = styled(FiPhoneCall)`
  margin-right: 18px;
`;

const SmallIcons = styled.div`
height: 110px;
  display: flex;
  width: 80%;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  margin-right: 55px;
  overflow-y: hidden;
`;

const SmallIcon = styled.div`
  color: #ffffff;
  cursor: pointer;
  font-size: 22px;
  margin-bottom: 60px;
  color: crimson;
  margin-left: 50px;
`;

const LinkedinIcon = styled(FiLinkedin)``;
const InstagramIcon = styled(FiInstagram)``;
const GithubIcon = styled(FiGithub)``;

const MoreButton = styled.button`
  display: none;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  background-color: crimson;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen}>
      <Photo  isOpen={isOpen} />
      <Title isOpen={isOpen}>Rahul Dhanak</Title>
      <Box>
        <TextLoop>
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </TextLoop>
      </Box>
      <Line />
      <Icon1>
        <MailIcon size={24} />
        <div>rahuldhanak11@gmail.com</div>
      </Icon1>
      <Icon2>
        <LocationIcon size={24} />
        <div>Mumbai MH, India</div>
      </Icon2>
      <Icon3>
        <CallIcon size={24} />
        <div>9892943905</div>
      </Icon3>
      <SmallIcons>
        <a href='https://www.linkedin.com/in/rahul-dhanak-9275b92b1/' target="_blank" rel="noopener noreferrer"><SmallIcon><LinkedinIcon /></SmallIcon></a>
        <a href='https://www.instagram.com/rahuldhanak11' target="_blank" rel="noopener noreferrer"><SmallIcon><InstagramIcon /></SmallIcon></a>
        <a href='https://github.com/rahuldhanak11' target='_blank' rel="noopener noreferrer"><SmallIcon><GithubIcon /></SmallIcon></a>
      </SmallIcons>
      <MoreButton onClick={toggleSidebar}>{isOpen ? 'Less' : 'More'}</MoreButton>
    </Container>
  );
};

export default Sidebar;
