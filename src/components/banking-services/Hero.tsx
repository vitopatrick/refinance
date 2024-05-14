const Hero = () => {
  return (
    <div
      style={{
        background:
          "url('https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundPosition: "center center",
      }}
      className="h-[60vh]"
    >
      <div className="w-full h-full bg-black/60">
        {/* container */}
        <div className="w-[90%] flex justify-center items-center h-full mx-auto">
          {/* content */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <h4 className="md:text-6xl text-5xl font-bold  text-white text-center font-main">
              Banking Services
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
