import styled from "styled-components";


const CastContainer = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
margin-top: 16px;
margin-bottom: 0;
padding: 0;
margin-left: auto;
margin-right: auto;

//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   text-align: center;
//   padding-top: 30px;
//   padding-bottom: 30px;
//   gap: 20px;
`;

const CastCard = styled.li`
max-width: min-content;
background-color: #f6e7bd;
border-radius: 15px;
padding: 8px;
text-wrap: wrap;
  img:hover {
    scale: 1.02; 
  }

  span{
    font-weight: 600; 
    color: rgb(32, 12, 51); }
`;

// const NameTitle = styled.p`
// scale: 1.02;
//   margin: 5px;
// `;
// const CharacterTitle = styled.p`
//   margin: 5px;
// `;
const ImgPlaceholder = styled.div`
width: 200px;
height: 300px;
align-items: center;
`

const Info = styled.p`

`

export {CastCard, CastContainer, ImgPlaceholder, Info}