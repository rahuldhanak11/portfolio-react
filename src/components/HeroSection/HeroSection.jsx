import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
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
`;

const SkillCard = styled.div`
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
    width: 40px;
    height: 40px; 
    margin-top: 10px;
  }
`;


const SkillsContainer = styled.div`  
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding-bottom: 20px; 

  @media screen and (max-width: 768px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
  margin-top: 10px;
  }

`;

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
  margin-top: 10px;
  } 
`
const ToolCard = styled.div`
  width: 100px; 
  height: 100px; 
  background-color: #2D2C35;
  background-image: url(${props => props.imageUrl});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  margin-right: 30px;
  border: 0.5px solid #413F4B;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  
  @media screen and (max-width: 768px) {
    width: 50px; 
    height: 50px;
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
    React: 'src/assets/react1.svg',
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
        <div style={{ overflowX: 'auto' }}>
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
        </div>
        <Subtitle>
          TOOLS I HAVE WORKED ON
        </Subtitle>
        <div style={{ overflowX: 'auto' }}>
          <ToolsContainer>
            <ToolCard imageUrl={toolImages.Illustrator}></ToolCard>
            <ToolCard imageUrl={toolImages.Photoshop}></ToolCard>
            <ToolCard imageUrl={toolImages.Figma}></ToolCard>
            <ToolCard imageUrl={toolImages.Lightroom}></ToolCard>
            <ToolCard imageUrl={toolImages.Autocad}></ToolCard>
            <ToolCard imageUrl={toolImages.Canva}></ToolCard>
          </ToolsContainer>
        </div>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
