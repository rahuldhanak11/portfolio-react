import React from 'react'
import styled from 'styled-components';

const RickshareContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px;
  border-radius: 11px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;;  
  margin: 5px;
   
`;


const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  background-image: url(${props => props.imageUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  padding: 20px;
  margin: 30px;  
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

  
const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;


const ProjectName = styled.div`
font-size: 16px;
font-weight: 400;
color: white;
margin-top: 10px;
`;

const ProjectDescription = styled.div`
font-size: 14px;
color: #666;
margin-top: 5px;

`;

function Prodigy() {
    const projectImages = {
        Portfolio: '/portfolio-01.png',
        MovieSearch:'/TTT.jpg',
        RickShare:'rickshareweb1-01.png'
      }
  return (
    <div id='web-dev'>
        <RickshareContainer>
          <GridContainer>
            <Project><Card imageUrl={projectImages.Portfolio}></Card>
            <ProjectName>Portfolio Website</ProjectName>
          <ProjectDescription>Web-Development</ProjectDescription>
          </Project>
          <Project><Card imageUrl={projectImages.RickShare}></Card>
          <ProjectName>RickShare Official Website</ProjectName>
          <ProjectDescription>Social Media Post</ProjectDescription>
          </Project>
          </GridContainer>
          </RickshareContainer>
    </div>
  )
}

export default Prodigy;
