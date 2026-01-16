import heroimg from "../assets/image/Image02.webp";

export default function Herosection() {
  return (
    <div className="w-screen h-[90vh] sm:h-[88vh] bg-center bg-cover relative rounded-b-4xl overflow-hidden" style={{ backgroundImage: `url(${heroimg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative border h-full grid grid-rows-2 text-center">
        <div className="flex flex-col justify-center items-center gap-2.5">
            <h1 className="text-white text-sm sm:text-3xl md:text-4xl"> MARCI METZGER – THE RIDGE REALTY GROUP</h1>
            <h2 className="text-white text-xl sm:text-4xl md:text-5xl font-cinzel"> Pahrump Realtor</h2>
            <button type="button" className="bg-white text-black w-20 h-10 rounded-xl sm:w-30">Call Now</button>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}
