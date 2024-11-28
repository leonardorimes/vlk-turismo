import Button from "./Button";

// import Search from "./Search";
// import { IoSearch } from "react-icons/io5";
import Secao2 from "./Secao2";
import Internacionais from "./Internacionais";
import Nacionais from "./Nacionais";
import Depoimentos from "./Depoimentos";
import Whats from "./whats";
import imgHome from "../assets/images/IMG-HOME.png";

function Home() {
  return (
    <>
      <div className="bg-[url('/public/BACKGROUND.png')] bg-no-repeat bg-cover p-1">
        <div className="bg-cover w-[80%] mx-auto my-0">
          <div className="sm:hidden md:block search flex justify-center mx-auto mt-20 gap-9 relative w-[80%] ">
            {/* <Search className=" w-full h-14 rounded-xl shadow-lg outline-none p-8" />
            <Button className="  rounded-full bg-green-700 absolute  right-2  top-3 px-10 py-2 text-white flex items-center gap-2">
              <IoSearch /> Buscar
            </Button> */}
          </div>
          <div className="flex xs:flex-col-reverse sm:flex-col-reverse  md:flex-col-reverse lg:flex-row sm:items-center  justify-center gap-24 mt-28 mx-0 w-full">
            <div className="lg:w-[450px] md:w-[250px] sm:w-[250px] xs:w-[250px]">
              <h1 className="text-4xl font-bold mb-6">
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
            <img src={imgHome} alt="" />
          </div>
        </div>
      </div>
      <Secao2 />
      <Internacionais />
      <Nacionais />
      <Depoimentos />
      <Whats />
    </>
  );
}

export default Home;
