import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";


const RickshareContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;;  
  margin: 5px; 
   
`;

const DescriptionBox = styled.div`
margin-top: 30px;
margin-left: 15px;
width: 1500px;
padding: px;
display: flex;
flex-direction: row;
align-items: center;
`

const Socials = styled.div`
display: flex;
flex-direction: row;
margin-right: 100px;
height: 100px;
width: 300px;
padding: 10px;
color: white;
font-size: 13px;
justify-content: center;
`

const Description = styled.div`
  width: 500px;
  height: 100px;
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

const Icon = styled.div`
margin-right: 10px;
align-items: center;
font-size: 16px;
`

function Rickshare() {
    const projectImages = {
        RickShareLogo: '/ricksharelogo-01.png',
        RickShareUI: '/rickshareui-01.png',
        RickShareApp:'',
        RickShareWeb:'/rickshareweb1-01.png'
      }
  return (
    <div id='rickshare'>
        <RickshareContainer>
          <GridContainer>
            <Project><Card imageUrl={projectImages.RickShareLogo}></Card>
            <ProjectName>RickShare Logo</ProjectName>
          <ProjectDescription>Logo Design</ProjectDescription>
          </Project>
          <Project><Card imageUrl={projectImages.RickShareUI}></Card>
          <ProjectName>RickShare Application</ProjectName>
          <ProjectDescription>UI/UX Design and Development</ProjectDescription>
          </Project>
          {/* <Project><Card imageUrl={projectImages.RickShareApp}></Card>
          <ProjectName>RickShare Application</ProjectName>
          <ProjectDescription>Flutter & Firebase</ProjectDescription>
          </Project> */}
          <Project><a href='https://rickshare.netlify.app' target='blank'><Card imageUrl={projectImages.RickShareWeb}></Card></a>
          <ProjectName>RickShare Official Website</ProjectName>
          <ProjectDescription>Web Development</ProjectDescription>
          </Project>
          </GridContainer>
          </RickshareContainer>
    </div>
  )
}

export default Rickshare
