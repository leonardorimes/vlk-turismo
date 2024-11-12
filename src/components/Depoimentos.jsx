import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Depoimentos() {
  // Array de objetos contendo as informações dos depoimentos
  const depoimentos = [
    {
      nome: "Leonardo Rimes",
      imagem: "../public/leo.jpg",
      opiniao:
        "Lorem ipsum dolor sit amet consectetur. Aliquet malesuada tellus viverra ultricies egestas sociis gravida sem. Enim elit massa ullamcorper erat.",
    },
    {
      nome: "Joana Souza",
      imagem: "https://mighty.tools/mockmind-api/content/human/52.jpg",
      opiniao:
        "Lorem ipsum dolor sit amet consectetur. Aliquet malesuada tellus viverra ultricies egestas sociis gravida sem. Enim elit massa ullamcorper erat.",
    },
    {
      nome: "Maria Esther",
      imagem: "https://mighty.tools/mockmind-api/content/human/51.jpg",
      opiniao:
        "Lorem ipsum dolor sit amet consectetur. Aliquet malesuada tellus viverra ultricies egestas sociis gravida sem. Enim elit massa ullamcorper erat.",
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
    <div className="mt-32 flex w-full gap-6 z-[9999] justify-center items-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Recomendados por mais de <br /> 5.000 clientes!
        </h1>
        <p className="w-[80%]">
          Confiados por mais de 5.000 clientes satisfeitos! Experiência e
          qualidade garantidas para atender às suas necessidades com excelência.
        </p>
      </div>
      <div className="slider-container w-[600px] ">
        <Slider {...settings} className="h-full">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="w-full bg-slate-200 shadow-md rounded-xl flex p-8 relative"
            >
              <img
                src={depoimento.imagem}
                alt={depoimento.nome}
                className="w-40 rounded-full absolute right-20 top-[50px]"
              />
              <div className="flex flex-col gap-3 w-[50%]">
                <div className="bg-slate-50 rounded-full py-2 text-xl w-50 self-start">
                  <span className="center mx-8">{depoimento.nome}</span>
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
