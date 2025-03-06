import { styled } from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    margin: auto;
    background-color:rosybrown;
    font-size: calc(2px + 1.5vw);
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Albert Zhang Credits &copy; 2025</p>
        </StyledFooter>
    );
}
