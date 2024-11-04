import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <img
        src="../public/VLK.png"
        alt="logomarca VLK"
        className="w-72 absolute top-10 left-4 "
      />
      <NavBar />
    </header>
  );
}

export default Header;
