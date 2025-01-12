import Image from "next/image";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "ANGELS FUND",
    subheading:
      "We currently run a $2million Angel Fund set in building 50-100 early stage companies to Large scaleups fit and ready for great exits. This Fund is brought in together from our Investors Network and Corporate Venture Studio activities bringing good returns for our Investors and Partners.",
  },
  {
    heading: "TALENT OUTSOURCING",
    subheading:
      "Through our talent network, we outsource talents on full-time, remote or contract roles across the globe based on the needs of our partners network. We have outsourced over 500+ Talents across 40+ organizations in the course of our journey so far.",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="lg:-ml-64">
            <Image
              src="/assets/why/iPad.png"
              alt="iPad-image"
              width={4000}
              height={900}
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-[30%] flex items-center justify-center bg-circlebg">
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
