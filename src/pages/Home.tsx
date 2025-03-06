import { styled } from "styled-components";
import profilePic from './profile.jpg';

const StyledDiv = styled.div`
    background-color: mistyrose;
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
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

const Image = styled.img`
    width: 40%;
    margin: auto;
    display: block;
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

export default function Home() {
    return (
        <StyledDiv>
            <MainText>
                <StyledHeader>Home</StyledHeader>
                <Image src={profilePic} alt="profile picture"/>
                <StyledParagraph>
                    Welcome to my personal portfolio! Here, you can explore my academic background, professional experiences,
                    and personal projects. I am passionate about leveraging technology to solve complex problems, and this
                    website serves as a showcase of my journey in computer science and biochemistry. Feel free to browse through
                    my resume, projects, and skills to learn more about my work and aspirations.
                </StyledParagraph>
            </MainText>
        </StyledDiv>
    );
}