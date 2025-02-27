import { useState } from "react";
import { Navbar, MenuIcon, MenuLinks, MenuItem } from "./style";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <h2 style={{ color: "#34436a" }}>Logo</h2>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
      <MenuLinks open={isOpen}>
        <MenuItem>Início</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Contato</MenuItem>
      </MenuLinks>
    </Navbar>
  );
};

export default Header;
