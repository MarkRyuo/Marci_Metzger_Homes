import heroimg from "../assets/image/Image02.webp";
import Dropdown from "../components/Dropdown"


export default function Herosection() {
  return (
    <div
      className="w-screen h-[90vh] sm:h-[88vh] bg-center bg-cover relative rounded-b-4xl overflow-hidden"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative border h-full grid grid-rows-[auto_1fr]">
        <div className="flex flex-col h-[30vh] sm:h-[40vh] justify-center items-center gap-2.5 sm:gap-3.5 ">
          <h1 className="text-white text-sm sm:text-lg font-source-sans-3 font-light">
            {" "}
            MARCI METZGER – THE RIDGE REALTY GROUP
          </h1>
          <h2 className="text-white text-2xl sm:text-6xl font-cinzel">
            {" "}
            Pahrump Realtor
          </h2>
          <button
            type="button"
            className="bg-white text-black text-sm font-bold font-source-sans-3 w-20 h-10 rounded-xl sm:w-30"
          >
            Call Now
          </button>
        </div>

        <div className="border flex h-full justify-center">
          <div className="border rounded-2xl h-full flex flex-col w-full">
            <div className="flex justify-end">
              <Dropdown />
            </div>

            <div className="max-h-full">
              <Dropdown />
              <Dropdown />
              <Dropdown />
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
