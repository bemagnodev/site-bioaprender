import { useState } from 'react';
import { Navbar, MenuIcon, MenuLinks, MenuItem, Logo } from './style';
import logo from '../../assets/bioazul.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <Logo src={logo} />
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
      <MenuLinks open={isOpen}>
        <MenuItem>Quem Somos?</MenuItem>
        <MenuItem>Proposta Pedagógica</MenuItem>
        <MenuItem>Ambientes</MenuItem>
        <MenuItem>Atividades Extras</MenuItem>
        <MenuItem>Projetos</MenuItem>
      </MenuLinks>
    </Navbar>
  );
};

export default Header;
