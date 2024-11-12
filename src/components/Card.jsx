function Card({ title, subtitle, price, img }) {
  return (
    <div className="w-80 mx-6 h-[450px] rounded-xl overflow-hidden bg-slate-50 grid place-items-center shadow-2xl relative">
      <div className=" w-full overflow-hidden rounded-xl grid place-items-center">
        <img src={img} alt="" className="rounded-xl absolute top-0" />
      </div>
      <div className="flex justify-betweem items-center gap-9 mt-80">
        <div className="flex flex-col">
          <h2 className="text-3xl">{title}</h2>
          {subtitle}
        </div>
        <span className=" bg-yellow-600 p-2 rounded-full font-bold">
          {price}
        </span>
      </div>
    </div>
  );
}

export default Card;
