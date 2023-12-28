const { default: styled } = require("styled-components");


const MoviesLayout = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin-top: 16px;
margin-bottom: 0;
padding: 0;
margin-left: auto;
margin-right: auto;
color: #111111;

`

const MovieItem = styled.li`
   
    :hover {
        background-color: #faba08;
        // color: #111111;
    }
    // :not(:last-child) {
    //     margin-bottom: 6px;
    // };

    a{
        color: #111111;
    }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  width: 200px;
  height: 340px;
  border-radius: 15px;

  :hover {
    scale: 1.07;
`;

 const Img = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover; 
    border-radius: 15px;
   
`;

export {MoviesLayout, MovieItem, Card, Img}