import { styled } from "styled-components";

const StyledDiv = styled.div`
    background-color: mistyrose;
    width: 70%;
    height: auto;
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

const StyledParagraph = styled.p`
    margin: 0 1vw;
    font-size: calc(1.5px + 1.5vw);
`;

const StyledHeader = styled.h3`
    text-align: center;
    font-size: calc(2px + 2vw);
    margin: 1vw 0;
`;

const StyledUl = styled.ul`
    margin: 0 1vw;
`;

const StyledLi=styled.li`
    margin: 0 1vw;
    font-size: calc(1.5px + 1.5vw);
`;

const StyledAnchor = styled.a`
    text-decoration: none;
    color: #00819d;
`;


export default function Contact() {
    return (
        <StyledDiv>
            <MainText>
                <StyledHeader>Contact</StyledHeader>
                <StyledParagraph>
                    Feel free to get in touch with me! You can reach me through the following methods:
                </StyledParagraph>
                <StyledUl>
                    <StyledLi>Email: albert.zhang@email.com</StyledLi>
                    <StyledLi>Phone: +1 (609) 752-4086</StyledLi>
                    <StyledLi>LinkedIn: <StyledAnchor href="https://www.linkedin.com/in/albertzhang112" target="_blank">linkedin.com/in/albertzhang112</StyledAnchor></StyledLi>
                    <StyledLi>GitHub: <StyledAnchor href="https://github.com/albertzz112" target="_blank">github.com/albertzz112</StyledAnchor></StyledLi>
                </StyledUl>
                <StyledHeader>Social Media Links</StyledHeader>
                <StyledParagraph>
                    Instagram: <StyledAnchor href="https://instagram.com/albertzzzz"> instagram.com/albertzzzz </StyledAnchor>
                </StyledParagraph>
                <StyledHeader>Location</StyledHeader>
                <StyledParagraph>
                    I am currently based in Boston, MA, but I am open to remote collaborations or travel for projects. Feel free to reach out no matter where you're located!
                </StyledParagraph>
            </MainText>
        </StyledDiv>
    );
}
