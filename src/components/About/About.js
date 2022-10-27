const About = () => {
  return (
    <div className="flex flex-col w-full border-opacity-50 mt-8">
      <div className=" h-[auto] w-[95%] mx-auto rounded-box place-items-center">
        <h2 className="text-2xl">Our Mission... </h2>
        <p>
          The Jug's mission is to improve the physical and mental well-being of
          our customers. We strive to provide unique blends of natural wellness
          products and holistic solutions that promote the healing of the mind,
          body, and soul.
        </p>
      </div>
      <div className="flex flex-col h-[auto] w-[100%] mx-auto bg-base-300  place-items-center">
        <h2 className="text-2xl"> Why are we different?</h2>
        <div className="card w-[98%] bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              We’re not just another supplement brand.
            </h2>
            <p>
              We create natural blends of wellness products that promote the
              healing of the mind, body, and soul.
            </p>
          </div>
        </div>
        <div className="card w-[98%] bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              All of our products are made with organic ingredients
            </h2>
            <p>and contain no artificial flavors or preservatives.</p>
          </div>
        </div>
        <div className="card w-[98%] bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              This is the foundation of self-improvement.
            </h2>
            <p>
              Taking care of your body makes you stronger, more resilient, and
              more capable.
            </p>
          </div>
        </div>
      </div>
      <div className="divider">logo</div>
      <div className="card lg:card-side bg-base-100 shadow-xl flex flex-col-reverse">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Our Promise</h2>
          <p>
            Why are we different? We’re not just another supplement brand. We
            create natural blends of wellness products that promote the healing
            of the mind, body, and soul. All of our products are made with
            organic ingredients and contain no artificial flavors or
            preservatives.
          </p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Listen</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
