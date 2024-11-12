import { RiWhatsappFill } from "react-icons/ri";

function Whats() {
  return (
    <div className="w-full fixed top-5    mx-3 pointer">
      <RiWhatsappFill className="w-32 h-32 text-green-600 bg-white rounded-full cursor-pointer " />
      <span className="bg-green-900 rounded-full text-slate-50 px-4 py-1 absolute top-0 left-28">
        Fale Conosco
      </span>
    </div>
  );
}

export default Whats;
