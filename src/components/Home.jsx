import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Search from "./Search";
import { IoSearch } from "react-icons/io5";

function Home() {
  const [menu, setCloseMenu] = useState(false);

  function handleMenu() {
    setCloseMenu(!menu);
  }

  return (
    <div className="bg-[url('/public/BACKGROUND.png')] bg-no-repeat bg-cover ">
      <div className="bg-cover w-[80%] mx-auto my-0">
        <Header
          menu={menu}
          setCloseMenu={setCloseMenu}
          handleMenu={handleMenu}
        />
        <div className="sm:hidden md:block search flex justify-center mx-auto mt-20 gap-9 relative w-[80%] ">
          <Search className=" w-full h-14 rounded-xl shadow-lg outline-none p-8" />

          <Button className="  rounded-full bg-green-700 absolute  right-2  top-3 px-10 py-2 text-white flex items-center gap-2">
            <IoSearch /> Buscar
          </Button>
        </div>
        <div className="flex sm:flex-col-reverse lg:flex-row sm:items-center  justify-center gap-24 mt-28 w-full">
          <div className="w-[450px]">
            <h1 className="text-5xl font-bold mb-6">
              Descubra o mundo com a VLK!
            </h1>
            <p className="mb-6">
              Nossa agência de turismo oferece experiências personalizadas e
              roteiros cuidadosamente planejados para transformar suas viagens
              em memórias inesquecíveis.
            </p>

            <Button className="rounded-full bg-green-700 px-12 py-4 text-white font-bold">
              {" "}
              Explorar Destinos
            </Button>
          </div>
          <img src="../public/IMG-HOME.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
