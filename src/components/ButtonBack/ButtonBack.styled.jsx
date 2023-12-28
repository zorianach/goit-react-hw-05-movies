import { Link } from 'react-router-dom';
import styled from 'styled-components';

 const Button = styled.button`
cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  width: 90px;
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
//   outline: 2px solid black;

 
`;

 const LinkBack = styled(Link)`
  text-decoration: none;
  :hover {
    // color: white;
    // font-weight: 600;
    color: rgb(81, 29, 131);
    background-color: #faba08;
  }
`;

export {Button, LinkBack}