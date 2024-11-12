import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-200 p-2 mt-20   gap-96 ">
      <div className="flex justify-center items-center lg:gap-[800px] md:flex-col sm:flex-col lg:flex-row md:gap-10 sm:gap-10">
        <div className="img  ">
          <img
            src="../public/VLK.png"
            alt="logomarca VLK"
            className="w-full w-44 "
          />
        </div>
        <div className="social flex gap-10">
          <a href="https://www.instagram.com/vlkturismo/" target="_blank">
            <AiFillInstagram className="text-green-900 text-3xl" />
          </a>

          <a href="">
            <FaFacebook className="text-green-900 text-3xl" />
          </a>
        </div>
      </div>
      <p className="text-center mt-10">
        Copyright © - VLK - Todos os direitos reservados. 2024 <br />
        Built by Leonardo Rimes
      </p>
    </footer>
  );
}

export default Footer;
