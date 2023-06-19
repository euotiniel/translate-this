import styled from "styled-components";

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const ListItem = styled.li`
  a {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.3rem;
    text-decoration: none;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.white};
      font-weight: 500;
    }
  }
`;
