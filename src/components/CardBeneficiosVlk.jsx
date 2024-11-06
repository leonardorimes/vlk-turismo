function CardBeneficiosVlk({ img, title, text }) {
  return (
    <div className="grid place-items-center">
      <img src={img} alt="" />
      <h1 className="text-2xl font-bold mt-2 mb-2">{title}</h1>
      <p className="text-center">{text}</p>
    </div>
  );
}

export default CardBeneficiosVlk;
