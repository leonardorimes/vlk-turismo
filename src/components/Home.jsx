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
      <Header menu={menu} setCloseMenu={setCloseMenu} handleMenu={handleMenu} />
      <div className="sm:hidden md:block search flex justify-center mx-auto mt-20 gap-9 relative w-[30%] ">
        <Search className=" w-full h-14 rounded-xl shadow-lg outline-none p-8" />

        <Button className="  rounded-full bg-green-700 absolute  right-2  top-3 px-10 py-2 text-white flex items-center gap-2">
          <IoSearch /> Buscar
        </Button>
      </div>
    </div>
  );
}

export default Home;
