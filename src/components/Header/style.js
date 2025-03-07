import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fffdf0;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
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
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #fffdf0;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #6e9485;
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 90px;
  cursor: pointer;
`;
