const CardsContainer = () => {
  return (
    <div className="bg-base-200 mt-[3rem] flex flex-col md:flex-row">
      <div className="card w-[90%] my-4 md:w-[33%] md:mx-4 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src="https://live.staticflickr.com/65535/52456393322_aebb70e651_o.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-[90%] my-4 md:w-[33%] md:mx-4 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src="https://live.staticflickr.com/65535/52456392402_89269ea14e_o.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-[90%] my-4 md:w-[33%] md:mx-4 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src="https://live.staticflickr.com/65535/52360492156_d13fe1ef3c_o.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
