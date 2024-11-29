import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Mudança aqui, para evitar conflito com o 'Link' do react-router-dom

function NavBar() {
  const [menu, setCloseMenu] = useState(false);

  function handleMenu() {
    setCloseMenu(!menu);
  }
  return (
    <nav
      className={`flex ${
        menu
          ? "justify-center items-center"
          : "flex justify-end items-center pt-20 mr-28"
      }`}
    >
      {/* Botão de menu mobile visível apenas em telas pequenas */}
      <span className="text-3xl cursor-pointer md:hidden mx-2 w-full block">
        {menu ? (
          <IoClose
            onClick={handleMenu}
            className="absolute z-50 right-10 top-10"
          />
        ) : (
          <IoMenu
            onClick={handleMenu}
            className="absolute z-50 right-10 top-10"
          />
        )}
      </span>

      {/* Menu que desaparece em telas maiores */}
      <ul
        className={`list-none flex gap-2 items-center z-10 md:z-auto md:static absolute ${
          menu
            ? "opacity-100 top-0 flex-col h-full w-full bg-white z-90 gap-0"
            : "opacity-0 top-[-400px] justify-end"
        } transition-all ease-in duration-500 md:opacity-100 md:top-0 md:relative`}
      >
        <li className="mx-4 my-6 md:my-0 cursor-pointer">
          <Link to="/">Inicio</Link>
        </li>
        <li className="mx-4 my-6 md:my-0 cursor-pointer">
          <ScrollLink to="secao2" smooth={true} duration={800}>
            Destinos
          </ScrollLink>
        </li>
        <li className="mx-4 my-6 md:my-0 cursor-pointer">
          <ScrollLink to="Pacotes" smooth={true} duration={1000}>
            Pacotes
          </ScrollLink>
        </li>
        <li className="mx-4 my-6 md:my-0 cursor-pointer">
          <ScrollLink to="Clientes" smooth={true} duration={1200}>
            Clientes
          </ScrollLink>
        </li>
        <li className="mx-4 my-6 md:my-0 cursor-pointer">
          <li className="mx-4 my-6 md:my-0 cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
