import React from 'react';
import { RiGraduationCapLine } from 'react-icons/ri';
import { HiDownload } from 'react-icons/hi';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import styled from 'styled-components';

const ResumeCard = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 50px;
  border-radius: 11px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 20px 22px;
  }
`;

const ResumeLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: crimson;

  @media screen and (max-width: 768px) {
    margin: 10px 0px 0px 20px;
  }
`;

const Line = styled.div`
  width: 10%;
  height: 6px;
  border-radius: 5px;
  background-color: crimson;
  margin-top: 15px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

const SectionContainer = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
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
`;

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
  border: 0.5px solid #3a3843;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
`;

const ResumeRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-left: 20px;

  @media screen and (max-width: 960px) {
    margin-left: 0;
    margin-top: 20px;
    justify-content: center;
  }

  :hover {
    color: crimson;
    background-color: white;
    transition: 0.3s;
  }
`;

const Download = styled.div`
  background-color: crimson;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DownloadText = styled.div`
  margin-left: 5px;
`;

const BulletPoints = styled.ul`
  list-style-type: disc;
  padding-left: 70px;
  margin-bottom: 50px;
`;

const BulletPoint = styled.li`
  margin-top: 30px;
`;

const College = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 7px;
`;

const Year = styled.div`
  font-size: 15px;
  color: crimson;
  margin-bottom: 7px;
`;

const Course = styled.div`
  font-size: 15px;
  color: #d9d9d9;
  margin-bottom: 7px;
`;

const Resume = () => {
  const handleDownload = () => {
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <ResumeCard>
      <ResumeLeft>
        <Title>RESUME</Title>
        <Line />
        <ResumeRight>
          <Download onClick={handleDownload}>
            <HiDownload />
            <DownloadText>Download Resume</DownloadText>
          </Download>
        </ResumeRight>
        <SectionContainer>
          <Header>
            <IndexCard>
              <RiGraduationCapLine />
            </IndexCard>
            Education
          </Header>
          <BulletPoints>
            <BulletPoint>
              <College>K.J Somaiya Institute of Technology</College>
   
              <Year>2022-2026</Year>
          
              <Course>BTech. Artificial Intelligence & Data Science</Course>
            </BulletPoint>
            <BulletPoint>
              <College>Shri T.P Bhatia Jr. College of Science</College>
            
              <Year>2020-2022</Year>
             
              <Course>HSC Science</Course>
            </BulletPoint>
            <BulletPoint>
              <College>JBCN International School</College>
              
              <Year>2017-2020</Year>
              
              <Course>IGCSE Certification</Course>
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
              <College>Prodigy Infotech</College>
              
              <Year>January 2024</Year>
              
              <Course>Web Development Intern</Course>
            </BulletPoint>
          </BulletPoints>
        </SectionContainer>
      </ResumeLeft>
    </ResumeCard>
  );
};

export default Resume;
