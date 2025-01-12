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
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
      

       
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
            Silverspoon Partners Network
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start mr-10">
            Our Silverspoon Partners Network allows organizations from across the globe to partner with us to tap into our global network to solve their growth needs across Marketing, Global Expansion, Partnerships, Talent Hiring, etc. Silverspoon Partners are able to access the benefits of the network and use it to drive growth within their own organizations.
            </h4>
          </div>
   {/* COLUMN-2 */}
          <div className="lg:-ml-64">
            <Image
              src="/assets/why/iPad.png"
              alt="iPad-image"
              width={3000}
              height={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPN;
