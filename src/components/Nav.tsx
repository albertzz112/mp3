import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    height: auto;
    background-color: navajowhite;
    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: auto;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        margin: 0;
    }
`;

const StyledLi = styled.li`
    text-align: center;
    background-color: orange;
    padding: 2vh 0;
    margin: 2vh 2px;
    border: 2px solid mediumslateblue;
    border-radius: 5px;
    width: 90%;
    font-size: calc(2px + 1.5vw);

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #00819d;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/about">About</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/education">Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/projects">Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/experience">Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/skills">Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/contact">Contact</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}
