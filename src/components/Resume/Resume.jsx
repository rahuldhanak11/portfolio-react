import React from 'react'
import { RiGraduationCapLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import styled from 'styled-components';

    const ResumeCard = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 50px;
    border-radius: 11px;
`

  const ResumeLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 3px;
  `

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
  margin-top: 15px;
  margin-bottom: 20px;
`;

const SectionContainer = styled.div`
  position: relative;
  margin-top: 20px;
  padding-left: 0px;
  
  ::before {
    content: '';
    position: absolute;
    top: 62px;
    left: 20px;
    width: 1px;
    height: 74%;
    background-color: crimson;
    z-index: 1;
  }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
    color: white;
    margin-top: 20px;
`

const IndexCard = styled.div`
  display: flex;
  width: 40px; 
  height: 40px; 
  background-color: #232229;
  align-items: center;
  justify-content: center;
  color: crimson;
  font-size: 18px;
  border-radius: 8px;
  margin-right: 30px;
  border: 0.5px solid #3A3843;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
`;

const ResumeRight = styled.div`
display: flex
justify-content: start;
align-items: center;
:hover{
    color: crimson;
    background-color: white;
    transition: 0.3s;
}
`
const Download = styled.div`
background-color: crimson;
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
`

const DownloadText = styled.div`
margin-left: 5px;
`

const BulletPoints = styled.ul`
  list-style-type: disc;
  padding-left: 70px;
  margin-bottom: 50px;
`;

const BulletPoint = styled.li`
margin-top: 40px;

`;

const College = styled.div`
    font-size: 16px;
    font-weight: 600; 
    color: white;
`

const Year = styled.div`
    font-size: 15px;
    color: crimson;
`
const Course = styled.div`
font-size: 15px;
color: #D9D9D9;
`

const Resume = () => {
    const handleDownload = () => {
        window.open('/path-to-your-resume.pdf', '_blank');
      };

    return (
        <ResumeCard>
            <ResumeLeft>
                <Title>
                    RESUME
                </Title>
                <Line/>
                <SectionContainer>
                <Header>
                <IndexCard>
                <RiGraduationCapLine />
                </IndexCard>
                Education
                </Header>
                <BulletPoints>
          <BulletPoint>
            <College>K.J Somaiya Institute of Technology</College><br /><Year>2022-2026</Year><br /><Course>BTech. Artificial Intelligence & Data Science</Course>
            </BulletPoint>
            <BulletPoint>
            <College>Shri T.P Bhatia Jr. College of Science</College><br /><Year>2020-2022</Year><br /><Course>HSC Science</Course>
            </BulletPoint>
            <BulletPoint>
            <College>JBCN International School</College><br /><Year>2017-2020</Year><br /><Course>IGCSE Certification</Course>
            </BulletPoint>
        </BulletPoints>
        </SectionContainer>
        <SectionContainer>
        <Header>
                <IndexCard>
                <HiOutlineComputerDesktop />
                </IndexCard>
                Experience
                </Header>
                <BulletPoints>
          <BulletPoint>
            <College>Prodigy Infotech</College><br /><Year>January 2024</Year><br /><Course>Web Development Intern</Course>
            </BulletPoint>
            </BulletPoints>
            </SectionContainer>
            </ResumeLeft>
          <ResumeRight>
            <Download onClick={handleDownload}>
            <HiDownload /> 
              <DownloadText>
              Download Resume
              </DownloadText>
            </Download>
          </ResumeRight>
        </ResumeCard>
      );
    };


export default Resume
