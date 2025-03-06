import { styled } from "styled-components";

const StyledDiv = styled.div`
    background-color: mistyrose;
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
        width: 100%;
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

const StyledUl = styled.ul`
    margin: 0 1vw;
`;

const StyledLi=styled.li`
    margin: 0 1vw;
    font-size: calc(1.5px + 1.5vw);
`;

export default function Education() {
    return (
        <StyledDiv>
            <MainText>
                <StyledHeader>Education</StyledHeader>
                <StyledParagraph>School: Boston University</StyledParagraph>
                <StyledParagraph>Majors: BA in Computer Science, BA in Biochemistry & Molecular Biology</StyledParagraph>
                <StyledParagraph>GPA: 3.67/4.0, Dean's List</StyledParagraph>
                <StyledParagraph>
                    Throughout my studies, I’ve explored a broad range of courses that have equipped me with both technical and analytical skills. This diverse coursework has allowed me to delve into the intersection of technology and sciences. Below is a list of key courses that have shaped my education.
                </StyledParagraph>
                <StyledParagraph>My coursework:</StyledParagraph>
                <StyledUl>
                    <StyledLi>
                        Machine Learning for Business Analytics
                    </StyledLi>
                    <StyledLi>
                        Data Science Tools and Applications
                    </StyledLi>
                    <StyledLi>
                        Artificial Intelligence
                    </StyledLi>
                    <StyledLi>
                        Organic Chemistry with Qualitative Analysis
                    </StyledLi>
                    <StyledLi>
                        Physical Biochemistry
                    </StyledLi>
                    <StyledLi>
                        Molecular Biology
                    </StyledLi>
                </StyledUl>
            </MainText>
        </StyledDiv>
    );
}