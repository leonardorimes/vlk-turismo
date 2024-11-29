import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import lanara from "../assets/images/lanara.png";
import luana from "../assets/images/luana.jpg";
import alex from "../assets/images/alex.png";

function Depoimentos() {
  // Array de objetos contendo as informações dos depoimentos
  const depoimentos = [
    {
      nome: "Lanara Mello",
      imagem: lanara,
      opiniao:
        "Uma empresa maravilhosa que trata seus clientes com carinho e com muito cuidado. Sempre estão dispostos a te oferecer uma experiência única de viagem!",
    },
    {
      nome: "Luana Vaz",
      imagem: luana,
      opiniao:
        "Sobre a experiência, a melhor possível! A Valeska e equipe são sensacionais… amo viajar com ela. Tornou-se uma amiga, sempre que posso vou nas viagens 😊",
    },
    {
      nome: "Alex Barros",
      imagem: alex,
      opiniao:
        "Muito bom super recomendo,  trabalham muito bem , adorei o passeio com esta empresa , cumpriu tudo q prometeu. Viagem super tranquila nota 1000",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
  };

  return (
    <div
      className="mt-32 flex w-full gap-6 z-[9999] justify-center items-center md:flex-col sm:flex-col lg:flex-row xs:flex-col"
      id="Clientes"
    >
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Recomendados por mais de <br /> 5.000 clientes!
        </h1>
        <p className="w-[80%]">
          Confiados por mais de 5.000 clientes satisfeitos! Experiência e
          qualidade garantidas para atender às suas necessidades com excelência.
        </p>
      </div>
      <div className="slider-container w-[700px] md:w-[400px] lg:w-[600px] sm:w-[400px] xs:w-[300px]">
        <Slider {...settings} className="h-full">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="w-full bg-slate-200 shadow-md rounded-xl flex p-8 relative"
            >
              <img
                src={depoimento.imagem}
                alt={depoimento.nome}
                className="w-40 rounded-full absolute right-20 lg:top-[50px] md:top-[150px] md:right-10 md:w-32 sm:top-[150px] sm:right-10 sm:w-32 xs:top-[150px] xs:right-10 xs:w-32"
              />
              <div className="flex flex-col gap-3 w-[50%]">
                <div className="bg-slate-50 rounded-full py-2 text-xl w-50 self-start md:w-60">
                  <span className="center mx-8 md:mx-12 sm:mx-4 xs:mx-2">
                    {depoimento.nome}
                  </span>
                </div>
                <p>{depoimento.opiniao}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Depoimentos;
