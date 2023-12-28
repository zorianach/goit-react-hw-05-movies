import styled from "styled-components";


const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
// display: grid;
justify-items: center;
// grid-template-columns: 1fr;
// grid-gap: 16px;
`;

 const Navigation = styled.nav`
  margin-bottom: 24px;
`;
 const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 18px;
  padding: 14px;

  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  backdrop-filter: blur(50px);
  border-radius: 20px;
`;

 const NavItem = styled.li`
  span {
    color: #ffc700;
  }

  a:hover,
  a:focus {
    color: #ffc700;
    span {
      color: white;
    }
  }
`

export {Container, Navigation, NavItem, NavList}