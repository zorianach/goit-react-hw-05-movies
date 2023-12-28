// const { default: styled, createGlobalStyle } = require("styled-components");
import styled from "styled-components";

// const GoBackLink = styled.span`
//   a {
//     position: relative;
//     padding-left: 12px;
//   }

//   a::before {
//     content: '';
//     display: block;

//     border-color: #ffc700;
//     border-style: solid;
//     border-width: 0 0 2px 2px;
//     height: 6px;
//     left: 0;
//     position: absolute;
//     width: 6px;
//     margin-top: -4px;
//     top: 50%;

//     transform: rotate(45deg);
//     -webkit-transform: rotate(45deg);
//   }

//   span {
//     color: #ffc700;
//   }

//   :hover,
//   :focus {
//     color: #ffc700;
//     a::before {
//       border-color: white;
//     }
//     span {
//       color: white;
//     }
//   }
// `;
const FilmLayout = styled.div`
display:flex;
gap: 25px;
border: 2px solid rgb(81, 29, 131); 
border-radius: 15px;
padding: 10px;

`;

const Img = styled.img`
width: 220px;
height: 300px;
`;

const InfoContainer = styled.div`
display:flex;
flex-direction: column;

`
const Title = styled.h2`
font-size: 32px;
color: rgb(81, 29, 131);
margin: 8px 0px;

`

const SubTitle = styled.h3`
margin: 12px 0px;
`;

const FilmDesc = styled.p`
margin: 0;
`

const AddTitle = styled.h2`
font-size: 22px;
color: rgb(81, 29, 131);
margin: 15px 0px;

`
const StyledList = styled.ul`
// margin: 0;
margin-top: 15px;
margin-bottom: 15px;
padding: 0;
display: flex;
gap: 30px;

text-decoration: none; 
color: #fff;

`

const ListItem = styled.li`
  a{
    color: rgb(32, 12, 51);
    border: 2px solid rgb(81, 29, 131); 
    border-radius: 15px;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    background-color: transparent;
    padding: 15px;
  }

:active, :hover, :focus {
      color: white;
      background-color: #faba08;
 }
`

// const GlobalStyles = createGlobalStyle`
//   ${ListItem}:hover, ${ListItem}:focus, ${ListItem}:active {
//     background-color: #faba08;
//     color: white;

//     .active {
//         // background-color: #faba08;
//         color: white;
//         text-decoration: none;
//     }
//   }

// `;

export {FilmLayout, Img, InfoContainer, Title, SubTitle, FilmDesc, StyledList, ListItem, AddTitle}