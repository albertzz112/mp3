import { styled } from "styled-components";

const StyledDiv = styled.div`
    background-color: mistyrose;
    width: 70%;
    height: 100vh;
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

export default function Skills() {
    return (
        <StyledDiv>
            <MainText>
                <StyledHeader id="main-title">Skills</StyledHeader>
                <StyledParagraph>
                    Below are the technical skills I have developed through my academic and professional experiences. These skills have been honed through coursework, hands-on projects, and internships.
                </StyledParagraph>

                <StyledSubHeader>Technical Skills</StyledSubHeader>
                <StyledUl>
                    <StyledLi>Programming Languages: Python, Java, C++, SQL, R</StyledLi>
                    <StyledLi>Data Science & Analysis: Machine Learning, Data Visualization, Predictive Modeling</StyledLi>
                    <StyledLi>Tools & Libraries: TensorFlow, scikit-learn, Pandas, NumPy, Matplotlib, Seaborn</StyledLi>
                    <StyledLi>Web Development: HTML, CSS, JavaScript, React</StyledLi>
                    <StyledLi>Database Management: MySQL, PostgreSQL</StyledLi>
                    <StyledLi>Other Tools: Git, Docker, Jupyter Notebook, Excel</StyledLi>
                </StyledUl>

            </MainText>
        </StyledDiv>
    );
}
