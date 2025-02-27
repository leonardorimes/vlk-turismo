import NavBar from "./NavBar";
import logo from "../assets/images/VLK.png";

function Header({ menu, setCloseMenu, handleMenu }) {
  return (
    <header className="w-[80%] mx-auto my-0 overflow-hidden">
      <img
        src={logo}
        alt="logomarca VLK"
        className="w-36 absolute top-10 left-15 "
      />
      <NavBar menu={menu} setCloseMenu={setCloseMenu} handleMenu={handleMenu} />
    </header>
  );
}

export default Header;
