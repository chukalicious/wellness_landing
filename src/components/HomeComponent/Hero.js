const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://live.staticflickr.com/65535/52457186024_f5318d5b57_o.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Wellness</h1>
          <p className="mb-5">This is the foundation of self-improvement.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
