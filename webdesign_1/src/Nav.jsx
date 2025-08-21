import styled from "styled-components";

const NavContainer = styled.nav`
  grid-area: nav;
  background: #333;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 5px 15px;
  transition: 0.3s;
  &:hover {
    background: #555;
    border-radius: 5px;
  }
`;

function Nav() {
    return (
        <NavContainer>
            <NavItem href="#">Home</NavItem>
            <NavItem href="#">About</NavItem>
            <NavItem href="#">Service</NavItem>
            <NavItem href="#">Contact</NavItem>
        </NavContainer>
    );
}

export default Nav;