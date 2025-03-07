import { useState } from "react";
import { Navbar, MenuIcon, MenuLinks, MenuItem, Logo } from "./style";
import logo from "../../assets/bioazul.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop;
      const headerHeight = 80;
      window.scrollTo({
        top: offset - headerHeight,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <Navbar>
      <Logo src={logo} onClick={() => scrollToSection("home")} />
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
      <MenuLinks open={isOpen}>
        <MenuItem onClick={() => scrollToSection("quem-somos")}>
          Quem Somos?
        </MenuItem>
        <MenuItem onClick={() => scrollToSection("proposta-pedagogica")}>
          Proposta Pedagógica
        </MenuItem>
        <MenuItem onClick={() => scrollToSection("ambientes")}>
          Ambientes
        </MenuItem>
        <MenuItem onClick={() => scrollToSection("atividades-extras")}>
          Atividades Extras
        </MenuItem>
        <MenuItem onClick={() => scrollToSection("projetos")}>
          Projetos
        </MenuItem>
      </MenuLinks>
    </Navbar>
  );
};

export default Header;
