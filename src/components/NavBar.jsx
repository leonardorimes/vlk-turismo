import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [menu, setCloseMenu] = useState(false);

  function handleMenu() {
    setCloseMenu(!menu);
  }

  return (
    <nav className="min-h-full pt-28 flex justify-between items-center">
      {/* Botão de menu mobile visível apenas em telas pequenas */}
      <span className="text-3xl cursor-pointer md:hidden mx-2 block">
        {menu ? (
          <IoClose onClick={handleMenu} />
        ) : (
          <IoMenu onClick={handleMenu} />
        )}
      </span>

      {/* Menu que desaparece em telas maiores */}
      <ul
        className={`list-none md:flex md:justify-center gap-10 items-center z-10 md:z-auto md:static absolute bg-rose-600 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 ${
          menu ? "opacity-100 top-0" : "opacity-0 top-[-400px]"
        } transition-all ease-in duration-500 md:opacity-100 md:top-0 md:relative`}
      >
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
