import { RiWhatsappFill } from "react-icons/ri";

function Whats() {
  return (
    <a
      href="https://wa.me/5522999617271"
      className="w-full fixed top-5    mx-3 pointer"
      target="blank"
    >
      <RiWhatsappFill className="w-8 h-16 text-green-600 rounded-full cursor-pointer " />
      <span className="bg-green-900 rounded-full text-slate-50 px-2 py-1 absolute top-0 left-8 text-sm">
        Fale Conosco
      </span>
    </a>
  );
}

export default Whats;
