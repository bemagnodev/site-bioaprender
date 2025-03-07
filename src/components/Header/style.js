import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fffdf0;
  color: white;
`;

export const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: none;
  color: #4a90e2;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuLinks = styled.ul`
  list-style: none;
  color: #0d4f83;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #fffdf0;
    padding: 20px;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;

export const Logo = styled.img`
  height: auto;
  width: 90px;
`;
