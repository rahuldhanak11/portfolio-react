import React from 'react'
import styled from 'styled-components'

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

const Description = styled.div`
  margin-top: 6px;
  height: 75px;
  margin-left: 3px;
  font-size: 15px;
  color: #999;
  line-height: 1.2;
  overflow-y: hidden;
`

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
  &.hover:{
    filter: invert(0.30);
  }
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

function GraphDes() {
    const projectImages = {
        CCR: '/CCR.png',
        TTT: '/TTT.jpg',
        Tgrid:'tenuregrid-01.png'
      }
  return (
    <div id='rickshare'>
        <RickshareContainer>
          <GridContainer>
            <Project><Card imageUrl={projectImages.CCR}></Card>
            <ProjectName>CSI Instagram Post</ProjectName>
          <ProjectDescription>Social Media Post</ProjectDescription>
          </Project>
          <Project><Card imageUrl={projectImages.TTT}></Card>
          <ProjectName>CSI Instagram Post</ProjectName>
          <ProjectDescription>Social Media Post</ProjectDescription>
          </Project>
          <Project><Card imageUrl={projectImages.Tgrid}></Card>
          <ProjectName>CSI Instagram Grid</ProjectName>
          <ProjectDescription>Social Media Post</ProjectDescription>
          </Project>
          
          </GridContainer>
          </RickshareContainer>
    </div>
  )
}

export default GraphDes

