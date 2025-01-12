"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/carousel/Lopsim Technologies Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Homly logo.png"
    },
    {
        imgSrc: "/assets/carousel/Nexus Integrated Global Service Ltd Logo.PNG"
    },
    {
        imgSrc: "/assets/carousel/Nitram Frost Logo.PNG"
    },
    {
        imgSrc: "/assets/carousel/Ovaloop Company Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Plug Afrika Logo.jpg"
    },
    {
        imgSrc: "/assets/carousel/Prazic Ltd Logo.PNG"
    },
    {
        imgSrc: "/assets/carousel/Prizeless Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Request Mechanic Logo.jpeg"
    },
    {
        imgSrc: "/assets/carousel/ROI Africa Logo.jpeg"
    },
    {
        imgSrc: "/assets/carousel/slack.png"
    },
    {
        imgSrc: "/assets/carousel/Stella Sync Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Teachly Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Terabyte Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Trashformas Logo.jpg"
    },

    {
        imgSrc: "/assets/carousel/Ziba Essentials Trading Ltd Logo.png"
    },
    {
        imgSrc: "/assets/carousel/AptConnect Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Big Step Africa Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Boosty Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Careers Verified Logo.jpg"
    },
    {
        imgSrc: "/assets/carousel/COE Logo.png"
    },
    {
        imgSrc: "/assets/carousel/Damo Export Trade Africa Logo.png"
    },
    {
        imgSrc: "/assets/carousel/DHARKAG Foods Ltd.jpg"
    },
    {
        imgSrc: "/assets/carousel/DSA Lagos Logo.PNG"
    },
    {
        imgSrc: "/assets/carousel/Ecorewards Logo.jpg"
    },
    {
        imgSrc: "/assets/carousel/Falconlite Logo.jpeg"
    },
    {
        imgSrc: "/assets/carousel/Gudan Farms Logo.png"
    },
 
    {
        imgSrc: "/assets/carousel/Innovative Village Logo.png"
    },
  
    {
        imgSrc: "/assets/carousel/Mavenaide Logo .png"
    },
];


// Extract complete file names with extensions
const fileNames = data.map(item => {
    return item.imgSrc.split('/').pop() || '';
});

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    sliderRef = React.createRef<Slider>();
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center'>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="py-14">
                        <Slider ref={sliderRef} {...settings}>
                            {data.map((item, i) =>
                                <div key={i} >
                                    <Image src={item.imgSrc} alt={fileNames[i]} width={150} height={150} style={{ height: '50px' }} />
                               
                                </div>
                            )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>

        )
    }
}
