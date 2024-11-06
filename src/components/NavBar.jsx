import { IoClose, IoMenu } from "react-icons/io5";

function NavBar({ menu, setCloseMenu, handleMenu }) {
  return (
    <nav
      className={`flex ${
        menu
          ? "justify-center items-center "
          : "flex justify-end items-center pt-28 mr-28"
      }`}
    >
      {/* Botão de menu mobile visível apenas em telas pequenas */}
      <span className="text-3xl cursor-pointer md:hidden mx-2 block">
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
            ? "opacity-100 top-0 flex-col h-full w-full bg-white z-90 gap-0 pt-52"
            : "opacity-0 top-[-400px] justify-end"
        } transition-all ease-in duration-500 md:opacity-100 md:top-0 md:relative`}
      >
        <li> </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="">Inicio</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="">Destinos</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="">Pacotes</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="">Clientes</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
