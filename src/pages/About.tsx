import { styled } from "styled-components";

const StyledDiv = styled.div`
    background-color: mistyrose;
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-grow:1;
    @media screen and (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

const MainText = styled.div`
    width: 80%;
    text-align: left;
    margin: 1vh auto;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledParagraph = styled.p`
    margin: 0 1vw;
    font-size: calc(1.5px + 1.5vw);
`;

const StyledHeader = styled.h3`
    text-align: center;
    font-size: calc(2px + 3vw);
    margin: 2vw 0;
`;

export default function About() {
    return (
        <StyledDiv>
            <MainText>
                <StyledHeader id="main-title">About Me</StyledHeader>
                <StyledParagraph>
                    Hello! My name is Albert Zhang, and I am currently pursuing a dual degree in Computer Science and Biochemistry & Molecular Biology at Boston University. I have a deep passion for both technology and science, and I believe that the intersection of these fields holds incredible potential to solve some of the world's most pressing challenges.
                </StyledParagraph>
                <StyledParagraph>
                    Throughout my academic career, I have developed a strong foundation in computer science, particularly in areas such as machine learning, web development, and data analysis. Additionally, my background in biochemistry has provided me with a unique perspective on solving complex problems that require an interdisciplinary approach.
                </StyledParagraph>
                <StyledParagraph>
                    In my spare time, I enjoy working on personal projects, contributing to open-source software, and collaborating with others to create innovative solutions. I am always eager to learn and grow as a professional, and I am excited about the future possibilities that lie ahead.
                </StyledParagraph>
            </MainText>
        </StyledDiv>
    );
}
