import styled from 'styled-components';


 const HeaderStyles = styled.div`
 top: 0;
 left: 0;
 position: sticky;
 z-index: 1100;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 min-height: 64px;
 padding-right: 24px;
 padding-left: 0px;
 padding-top: 12px;
 padding-bottom: 12px;
 color: #fff;
//  background-color: #d49d06;

 background-color: #faba08;
 //  background-color: #3f51b5;
 box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
   0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);`


   const NavigationStyles = styled.ul`
   display: flex;
//  justify-content: flex-start;
//  align-items: center;
 list-style: none;
 gap: 40px;
 font-size: 30px;

   `
const NavigationItem = styled.li`
text-decoration: none;

:hover {
    color: white;
    // font-size: 30px;
    // border-color: rgb(81, 29, 131);
    // -webkit-text-stroke-width: 0.5px;
    // -webkit-text-stroke-color: rgb(81, 29, 131);
}
`

const HeaderIcon = styled.svg`
   fill: rgb(81, 29, 131);
   z-index: 1101;


   `
export {HeaderStyles, NavigationStyles, NavigationItem, HeaderIcon}

