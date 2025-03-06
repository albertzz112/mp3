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

const StyledSubHeader = styled.h4`
    font-size: calc(1.5px + 1.5vw);
    margin-top: 2vh;
`;

const StyledUl = styled.ul`
    margin: 0 1vw;
`;

const StyledLi=styled.li`
    margin: 0 1vw;
    font-size: calc(1.5px + 1.5vw);
`;


export default function Experience() {
    return (
        <StyledDiv>
            <MainText>
                <StyledHeader>Experience</StyledHeader>

                <StyledSubHeader>Research and Development Intern</StyledSubHeader>
                <StyledParagraph>Company: Aramco</StyledParagraph>
                <StyledParagraph>Dates: May 2024 – August 2024</StyledParagraph>
                <StyledParagraph>Location: Boston, MA</StyledParagraph>
                <StyledParagraph>Responsibilities:</StyledParagraph>
                <StyledUl>
                    <StyledLi>
                        Led research and iterative experimentation to optimize a novel carbon capture bio-polymer aerogel, improving CO₂ capture efficiency by 96%.
                    </StyledLi>
                    <StyledLi>
                        Reviewed and discussed 1-2 research papers weekly with mentors, incorporating insights into experimental approaches.
                    </StyledLi>
                    <StyledLi>
                        Facilitated collaboration and shared insights between upstream and downstream teams through presentations.
                    </StyledLi>
                </StyledUl>
                <StyledSubHeader>Resident Assistant</StyledSubHeader>
                <StyledParagraph>Company: Boston University | Dates: May 2024 – Present | Location: Boston, MA</StyledParagraph>
                <StyledUl>
                    <StyledLi>Organized events fostering engagement and collaboration for over 2400 residents.</StyledLi>
                    <StyledLi>Balanced administrative duties with resident interactions to maintain a harmonious environment.</StyledLi>
                    <StyledLi>Provided guidance and conflict resolution with a positive and approachable demeanor.</StyledLi>
                </StyledUl>

            </MainText>
        </StyledDiv>
    );
}