import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { getCardData } from "../utils/bancoPacotes";
import { useEffect, useState } from "react";

function Internacionais() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getCardData("true", setCardData);
  }, []);

  return (
    <div
      className="sm:mt-[900px] lg:mt-[750px] xl:mt-24 md:mt-[700px] xs:mt-[1000px]"
      id="Pacotes"
    >
      <div className="grid place-items-center">
        <h1 className="text-4xl font-bold ">Destinos Internacionais</h1>
        <p className="text-center mt-4 w-[50%]">
          Explore o mundo com quem entende de viagens! Oferecemos uma ampla
          variedade de destinos internacionais para você descobrir novas
          culturas, paisagens incríveis e experiências inesquecíveis. Seja uma
          viagem romântica, em família ou uma aventura solo, nós cuidamos de
          tudo para que você apenas aproveite. O mundo está te esperando!
        </p>
      </div>
      <div className="mt-16">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.Pacote}
              subtitle={card.Destino}
              price={card.Valor}
              img={card.imagen}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Internacionais;
