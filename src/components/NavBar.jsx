import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [menu, setCloseMenu] = useState(false);
  const location = useLocation(); // Hook para obter a localização atual

  function handleMenu() {
    setCloseMenu(!menu);
  }

  const isInicioPage = location.pathname === "/"; // Verifica se está na página "Início"

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
          <Link to="/" onClick={menu ? handleMenu : undefined}>
            Inicio
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0 cursor-pointer">
          <Link to="/passagem" onClick={menu ? handleMenu : undefined}>
            Compre sua passagem
          </Link>
        </li>
        {isInicioPage && ( // Renderiza apenas se estiver na página "Início"
          <>
            <li className="mx-4 my-6 md:my-0 cursor-pointer">
              <ScrollLink
                onClick={menu ? handleMenu : undefined}
                to="secao2"
                smooth={true}
                duration={800}
              >
                Destinos
              </ScrollLink>
            </li>
            <li className="mx-4 my-6 md:my-0 cursor-pointer">
              <ScrollLink
                onClick={menu ? handleMenu : undefined}
                to="Pacotes"
                smooth={true}
                duration={1000}
              >
                Pacotes
              </ScrollLink>
            </li>
            <li className="mx-4 my-6 md:my-0 cursor-pointer">
              <ScrollLink
                onClick={menu ? handleMenu : undefined}
                to="Clientes"
                smooth={true}
                duration={1200}
              >
                Clientes
              </ScrollLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
