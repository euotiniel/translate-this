import styled from "styled-components";

export const Main = styled.main`
  padding: 20px 20%;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 25px;
  }

  h2 {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 20px;
  }

  p {
    font-size: 0.98rem;
    color: ${(props) => props.theme.colors.gray};
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 25px;
    word-spacing: 0.2em;
  }
`;
