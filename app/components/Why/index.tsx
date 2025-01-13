import Image from "next/image";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "INVESTMENT READINESS PROGRAM",
    subheading: "Prepares founder for investment readiness",
  },
  {
    heading: "GLOBAL EXPANSION PROGRAM",
    subheading: "Prepares founder for growth expansion",
  },
  {
    heading: "FUND ADMINISTRATION",
    subheading: "Administers funds for growth and development",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-2 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          {/* COLUMN-1 */}
          <div className="flex justify-center">
            <Image
              src="/assets/why/venture.png"
              alt="iPad-image"
              width={600}
              height={900}
              // className="lg:ml-[-100px]"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              Venture Studio
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Our Venture Studio co-builds and invests into our portfolio
              companies either from ideation or from growth stage, we also
              support scaleups to set up a Corporate Venture Studio and build
              internally their own parallel companies to scale thereby
              contributing to their valuation and fostering a bigger exit. Our
              studio also holds programs for founders as well
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src="/assets/why/check.svg"
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
