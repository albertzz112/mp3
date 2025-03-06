import { styled } from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    background-color:rosybrown;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 750px) {
        align-items: center;
    }
`

const StyledH1 = styled.h1`
    margin: 0;
    font-size: calc(2px + 3vw);
`;
const StyledH2 = styled.h2`
    margin: 0;
    font-size: calc(1px + 2vw);
`

export default function Header() {
    return(
      <StyledHeader>
          <StyledH1>Albert Zhang</StyledH1>
          <StyledH2>Online Resume</StyledH2>
      </StyledHeader>
    );
}