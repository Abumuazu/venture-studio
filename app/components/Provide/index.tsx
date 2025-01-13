import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/provide/marketing.svg",
    country: "Founders",
    paragraph: "",
  },
  {
    imgSrc: "/assets/provide/graphic.svg",
    country: "Investors",
    paragraph: "",
  },
  {
    imgSrc: "/assets/provide/heaking.svg",
    country: "Talents",
    paragraph: "",
  },
];

const Provide = () => {
  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81  text-center lg:text-start">
                About Us.
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                SPC UNIVERSE is one of the world’s fastest growing global
                networks for innovators. Her network currently spans across 15
                countries in the world and is constantly growing at an
                accelerated speed. The company began out of the continent of
                Africa and is built upon three pillars: Founders, Investors and
                Talents. As an organization, we believe that Founders, Talents
                and Investors are the main drivers of any global economy and
                creating a pathway that expresses and connects each of these
                pillars is vital in the growth system of the company.
              </h4>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-[#481251] rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
