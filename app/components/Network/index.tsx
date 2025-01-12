import Image from "next/image";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/network/bangladesh.svg",
    country: "FOUNDERS NETWORK",
    paragraph: "Our Founders Network is a global network of founders from across the world who can connect and build partnerships with one another that foster growth and development across borders. Through this network, we are able to support our founders across product development, fundraising, strategic partnerships and global expansion. Founders in our network are able to leverage the larger network to grow and expand across the world",
  },
  {
    imgSrc: "/assets/network/america.svg",
    country: "INVESTORS NETWORK",
    paragraph: "Our Investors Network is a global network of investors from across the world first primarily built on Angel Investors and then secondarily built on Venture Capital firms, DPIs and Family Offices. Through this network, we provide for our founders with our venture studio access to the earliest stage capital as well as a path to exit for our Angels through strategic partnerships with VCs, DPIs and Family Offices. We recognize the importance of capital for innovation to thrive and grow in any global economy.",
  },
  {
    imgSrc: "/assets/network/australia.svg",
    country: "TALENTS NETWORK",
    paragraph: "Our Talents Network is a crucial part of our global network as we have repeatedly seen how talents play a key role in driving the advancement of innovation. Founders can bring up innovation but only talents can ensure that this innovation thrives continuously. Since we recognize this importance, our talent network is built to meet this demand for our global network and ensures that the right skilled talents from our network can be connected to the demand from our partners network.",
  },
];

const Network = () => {
  return (
    <div className="bg-[#EED8F2]" id="project">
      <div className="mx-auto max-w-2xl py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">
          Our Network
        </h3>
<p className="text-center text-lg  my-4">
  Through all these networks, we have built an infrastructure that supports our systems for servicing our networks, below are our systems we use to service our networks.
</p>
        <Image
          src={"/assets/network/map.png"}
          alt={"map-image"}
          width={1400}
          height={800}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8  ">
          {Aboutdata.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex justify-start items-center gap-2">
                <h4 className="text-xl font-medium text-midnightblue">
                  {item.country}
                </h4>
              </div>
              <hr />
              <h4 className="text-lg font-normal text-bluegrey my-2">
                {item.paragraph}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;
