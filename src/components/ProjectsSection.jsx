import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import project images
import muzicPlayerImg from '../assets/images/projects/muzic-player.png';
import ticTacToeImg from '../assets/images/projects/tic-tac-toe.png';
import linkzyChatImg from '../assets/images/projects/linkzy-chat.png';
import aiSummarizerImg from '../assets/images/projects/ai-summarizer.png';

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.background};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const CardInfo = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: rgba(65, 105, 225, 0.1);
  color: ${({ theme }) => theme.primary};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.5)`};
  color: ${({ theme }) => theme.accent};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.accent};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const projects = [
  {
    title: "Muzic Player",
    description: "A feature-rich music player application built with Kotlin for Android devices, featuring local playback, notification controls, and background playback support.",
    image: muzicPlayerImg,
    techStack: ["Kotlin", "Android Studio", "Material Design"],
    liveDemo: "https://github.com/abhishek-maurya576/Muzic-Player/releases/tag/v1.0.0",
    sourceCode: "https://github.com/abhishek-maurya576/Muzic-Player"
  },
  {
    title: "Tic Tac Toe AI",
    description: "An interactive Tic Tac Toe game for Android with AI opponent, created using Java and Android Studio.",
    image: ticTacToeImg,
    techStack: ["Java", "Android Studio", "AI"],
    liveDemo: "https://github.com/abhishek-maurya576/Tic-Tac-Toe-AI/releases/tag/v1.0.0",
    sourceCode: "https://github.com/abhishek-maurya576/Tic-Tac-Toe-AI"
  },
  {
    title: "Linkzy Chat App",
    description: "A real-time chatting application with Firebase backend, featuring user authentication and live messaging capabilities.",
    image: linkzyChatImg,
    techStack: ["Java", "Kotlin", "Firebase", "Android Studio"],
    sourceCode: "https://github.com/abhishek-maurya576/Linkzy-Chat-App"
  },
  {
    title: "AI Text Summarizer",
    description: "A web application that uses AI to generate concise summaries of text content using the Hugging Face API.",
    image: aiSummarizerImg,
    techStack: ["Node.js", "Express", "Hugging Face API", "HTML/CSS/JS"],
    liveDemo: "https://ai-text-summarize-app.vercel.app/",
    sourceCode: "https://github.com/abhishek-maurya576/AI-Text-Summarize-app"
  }
];

const certifications = [
  {
    id: 1,
    title: "API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Issued Aug 2023",
    credentialId: "c3d7f2a0-3b1a-4b1a-9b1a-3b1a4b1a9b1a",
    verifyLink: "https://badgr.com/public/assertions/c3d7f2a0-3b1a-4b1a-9b1a-3b1a4b1a9b1a",
    skills: ["API Testing", "API Documentation", "Postman"]
  },
  {
    id: 2,
    title: "C Programming",
    issuer: "Coding Ninjas",
    date: "Issued Jul 2023",
    credentialId: "CN-9118",
    verifyLink: "https://www.codingninjas.com/verify/CN-9118",
    skills: ["C Programming", "Data Structures", "Problem Solving"]
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Issued Jun 2023",
    credentialId: "fcc-js-algo-ds",
    verifyLink: "https://www.freecodecamp.org/certification/abhishekmaurya/javascript-algorithms-and-data-structures",
    skills: ["JavaScript", "Algorithms", "Data Structures"]
  }
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </SectionTitle>
        <Grid>
          {projects.map((project, index) => (
            <Card
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  {project.liveDemo && (
                    <ProjectLink href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </ProjectLink>
                  )}
                  {project.sourceCode && (
                    <ProjectLink href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </Card>
          ))}
        </Grid>

        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Certifications
        </SectionTitle>
        <Grid>
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: cert.id * 0.1 }}
            >
              <CardContent>
                <CardTitle>{cert.title}</CardTitle>
                <CardInfo>
                  {cert.issuer} • {cert.date}
                </CardInfo>
                <TagsContainer>
                  {cert.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </TagsContainer>
                <CardInfo style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                  Credential ID: {cert.credentialId}
                </CardInfo>
                <ViewButton href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                </ViewButton>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;