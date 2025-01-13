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

const SPN = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-2 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-5xl pt-4 font-semibold lh-60  text-center lg:text-start">
                Silverspoon Partners Network
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                Our Silverspoon Partners Network allows organizations from
                across the globe to partner with us to tap into our global
                network to solve their growth needs across Marketing, Global
                Expansion, Partnerships, Talent Hiring, etc. Silverspoon
                Partners are able to access the benefits of the network and use
                it to drive growth within their own organizations.
              </h4>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <Image
              src="/assets/why/spn.png"
              alt="iPad-image"
              width={500}
              height={500}
              style={{
                borderRadius: "0.5rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPN;
