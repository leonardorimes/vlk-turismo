import NavBar from "./NavBar";

function Header({ menu, setCloseMenu, handleMenu }) {
  return (
    <header className="w-[80%] mx-auto my-0">
      <img
        src="../public/VLK.png"
        alt="logomarca VLK"
        className="w-56 absolute top-10 left-15 "
      />
      <NavBar menu={menu} setCloseMenu={setCloseMenu} handleMenu={handleMenu} />
    </header>
  );
}

export default Header;
