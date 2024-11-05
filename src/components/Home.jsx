import Button from "./Button";
import Header from "./Header";
import Search from "./Search";
import { IoSearch } from "react-icons/io5";

function Home() {
  return (
    <div className="bg-[url('/public/BACKGROUND.png')]">
      <Header />
      <div className="search flex justify-center mx-auto mt-20 gap-9 relative w-[70%] ">
        <Search className="w-full " />
        <Button className="rounded-xl bg-green-700 absolute right-[180px] top-2 px-10 py-1 text-white flex items-center gap-2">
          <IoSearch /> Buscar
        </Button>
      </div>
    </div>
  );
}

export default Home;
