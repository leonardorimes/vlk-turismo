import NavBar from "./NavBar";

function Header({ menu, setCloseMenu, handleMenu }) {
  return (
    <header>
      <img
        src="../public/VLK.png"
        alt="logomarca VLK"
        className="w-56 absolute top-10 left-4 "
      />
      <NavBar menu={menu} setCloseMenu={setCloseMenu} handleMenu={handleMenu} />
    </header>
  );
}

export default Header;
