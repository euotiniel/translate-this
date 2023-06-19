import styled from "styled-components";

export const Header = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20%;
  background-color: ${(props) => props.theme.colors.dark};
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.9rem;
  font-weight: 600;

  img {
    margin-top: 10%;
  }
`;
