import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  color: #000;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: #f70295;
  }

  &:hover {
    border-bottom: solid 3px #f70295;
  }
`;

export const Main = styled.main`
  /* margin-top: 30px; */
`;
