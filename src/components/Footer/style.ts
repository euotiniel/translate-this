import styled from "styled-components";

export const Footer = styled.footer`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20%;
  background-color: transparent;

  div {
    color: ${(props) => props.theme.colors.white};

    p {
      font-size: 0.85rem;
      font-weight: 300;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;

      li a {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;
