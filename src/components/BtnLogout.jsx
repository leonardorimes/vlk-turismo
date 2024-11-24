function BtnLogout({ sair }) {
  return (
    <button
      className="absolute top-12 right-12 bg-red-500 p-2 text-cyan-50"
      onClick={() => sair()}
    >
      {" "}
      Sair
    </button>
  );
}

export default BtnLogout;
