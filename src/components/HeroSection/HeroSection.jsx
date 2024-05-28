import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 50px;
  border-radius: 11px;

  @media screen and (max-width: 768px){
    padding: 20px 22px;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: crimson;
  @media screen and (max-width: 768px) {
    margin: 10px 0px 0px 20px;
  }
`;

const Description = styled.div`
  margin-top: 15px;
  font-size: 16px;
  color: #CCC7C7;
  line-height: 1.6;
`
const Subtitle = styled.div`
font-size: 20px;
font-weight: 600;
color: white;
margin-top: 35px;
margin-bottom: 20px;
`

const Line = styled.div`
  width: 10%;
  height: 6px;
  border-radius: 5px;
  background-color: crimson;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

const SkillCard = styled.div`
  flex-shrink: 0;
  width: 100px; 
  height: 100px; 
  background-color: #232229;
  background-image: url(${props => props.imageUrl});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  margin-right: 24px;
  border: 0.5px solid #413F4B;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  
  
  @media screen and (max-width: 768px) {
    width: 60px; 
    height: 60px;
    margin-top: 10px;
  }
`;


const SkillsContainer = styled.div`  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 20px;
  padding-bottom: 20px; 
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: crimson transparent;
  scrollbar-track-color: transparent;
  /* Firefox */
  scrollbar-width: thin; /* Sets the thickness of the scrollbar */
  scrollbar-color: crimson transparent; /* Sets the color of the thumb and track */

  /* WebKit-based browsers (Chrome, Safari, Samsung Internet) */
  &::-webkit-scrollbar {
    width: 10px; /* Sets the width of the scrollbar */
    height: 10px; /* Sets the height of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: crimson; /* Sets the color of the thumb */
    border-radius: 10px; /* Rounds the corners of the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a80202; /* Changes color on hover */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Sets the color of the track */
  }

  &::-webkit-scrollbar-corner {
    background: transparent; /* Removes the corner */
  }
  @media screen and (max-width: 960px) {
    &::-webkit-scrollbar {
    width: 4px; /* Set the width of the scrollbar */
  }
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: crimson transparent;
  margin-left: 0px;
  margin-top: 10px;
  }

`;

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 20px;
  padding-bottom: 20px; 
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: crimson transparent;
  scrollbar-track-color: transparent;
  &::-webkit-scrollbar {
    width: 4px; /* Set the width of the scrollbar */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: crimson; /* Set the color of the thumb */
    border-radius: 10px; /* Roundness of the thumb */
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #a80202; /* Change color on hover */
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent; /* Set the color of the track */
  }

  /* Corner */
  &::-webkit-scrollbar-corner {
    background: transparent; /* Remove the corner */
  }
  @media screen and (max-width: 960px) {
    &::-webkit-scrollbar {
    width: 4px; /* Set the width of the scrollbar */
  }
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: crimson transparent;
  margin-left: 0px;
  margin-top: 10px;
  }

`;
const ToolCard = styled.div`
  width: 100px; 
  height: 100px; 
  flex-shrink: 0;
  background-image: url(${props => props.imageUrl});
  background-color: #232229;
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  margin-right: 30px;
  border: 0.5px solid #413F4B;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  
  @media screen and (max-width: 960px) {
    width: 60px; 
    height: 60px;
    margin-top: 10px;
  }
`;


function HeroSection() {
  const skillImages = {
    C: '/skills/icons8-c-programming.svg',
    Python: '/skills/python-svgrepo-com.svg',
    Flutter: '/skills/flutter-svgrepo-com.svg',
    HTML: '/skills/html-5-svgrepo-com.svg',
    CSS: '/skills/css-3-svgrepo-com.svg',
    JavaScript: '/skills/javascript-svgrepo-com.svg',
    React: '/skills/react-svgrepo-com.svg',
    MySQL: '/skills/mysql-logo-svgrepo-com.svg',
  };

  const toolImages = {
    Photoshop: '/tools/photoshop-svgrepo-com.svg',
    Illustrator: '/tools/adobe-illustrator-svgrepo-com.svg',
    Figma: '/tools/figma-svgrepo-com.svg',
    Lightroom: '/tools/adobe-lightroom-svgrepo-com.svg',
    Autocad: '/tools/icons8-autocad.svg',
    Canva:'/tools/icons8-canva.svg'
  };

  return (
    <div id='about'>
      <HeroContainer>
        <Title>
          HELLO THERE!
        </Title>
        <Line/>
        <Description>
        I'm Rahul, a versatile and passionate designer and developer with a specialization in graphic design, UI/UX, web development, and Flutter app development. With a keen eye for detail and a commitment to excellence, I create visually stunning and user-friendly designs that not only look great but also provide an intuitive and engaging experience.
        <br />
        <br />
        Whether you're looking to enhance your digital presence or bring a new idea to life, I'm here to help you achieve your goals with creativity and technical proficiency. Let's work together to make your vision a reality!
        </Description>
        <Subtitle>
          MY SKILLS
        </Subtitle>
       
          <SkillsContainer>
            <SkillCard imageUrl={skillImages.C}></SkillCard>
            <SkillCard imageUrl={skillImages.Python}></SkillCard>
            <SkillCard imageUrl={skillImages.HTML}></SkillCard>
            <SkillCard imageUrl={skillImages.CSS}></SkillCard>
            <SkillCard imageUrl={skillImages.JavaScript}></SkillCard>
            <SkillCard imageUrl={skillImages.React}></SkillCard>
            <SkillCard imageUrl={skillImages.MySQL}></SkillCard>
            <SkillCard imageUrl={skillImages.Flutter}></SkillCard>
          </SkillsContainer>
        
        <Subtitle>
          TOOLS I HAVE WORKED ON
        </Subtitle>
          <ToolsContainer>
            <ToolCard imageUrl={toolImages.Illustrator}></ToolCard>
            <ToolCard imageUrl={toolImages.Photoshop}></ToolCard>
            <ToolCard imageUrl={toolImages.Figma}></ToolCard>
            <ToolCard imageUrl={toolImages.Lightroom}></ToolCard>
            <ToolCard imageUrl={toolImages.Autocad}></ToolCard>
            <ToolCard imageUrl={toolImages.Canva}></ToolCard>
          </ToolsContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
