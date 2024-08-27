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

function FlutterDev() {
    const projectImages = {
        GreenCommute: '/greencommute.jpeg',
        RickShare:'/rickshareui-01.png'
      }
  return (
    <div id='web-dev'>
        <RickshareContainer>
          <GridContainer>
            <Project><a href='https://github.com/rahuldhanak11/green-commute' target='_blank'><Card imageUrl={projectImages.GreenCommute}></Card></a>
            <ProjectName>Green Commute</ProjectName>
          <ProjectDescription>Save Carbon Footprint</ProjectDescription>
          </Project>
          <Project><Card imageUrl={projectImages.RickShare}></Card>
          <ProjectName>RickShare Application</ProjectName>
          <ProjectDescription>Startup dedicated to College Students</ProjectDescription>
          </Project>
          </GridContainer>
          </RickshareContainer>
    </div>
  )
}

export default FlutterDev;
