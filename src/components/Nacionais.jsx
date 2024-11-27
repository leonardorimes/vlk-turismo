import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useEffect, useState } from "react";

import { getCardData } from "../utils/bancoPacotes";

function Nacionais() {
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
          slidesToShow: 2,
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
    getCardData("false", setCardData);
  }, []);

  return (
    <div className="mt-20">
      <div className="grid place-items-center  sm:mt-[100px] lg:mt-[800px] xl:-mt-8 md:mt-[100px] xs:mt-[100px]  w-full">
        <h1 className="text-4xl font-bold"> Destinos Nacionais</h1>
        <p className="text-center mt-4 w-[50%]">
          Descubra o melhor do Brasil! Do litoral paradisíaco às montanhas
          encantadoras, oferecemos pacotes completos para os destinos mais
          incríveis do país. Conheça culturas diversas, sabores únicos e
          paisagens de tirar o fôlego, tudo com o conforto e a segurança que
          você merece. Sua próxima viagem está aqui, pertinho de você!
        </p>
      </div>
      <div className="mt-16 ">
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

export default Nacionais;
