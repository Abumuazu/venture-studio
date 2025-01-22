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
        imgSrc: "/assets/carousel/fundedai.png"
    },
    {
        imgSrc: "/assets/carousel/boosty.jpeg"
    },
    {
        imgSrc: "/assets/carousel/raum.svg"
    },
    {
        imgSrc: "/assets/carousel/Mavenaide Logo .svg"
    },
    {
        imgSrc: "/assets/carousel/enforca.jpeg"
    },
    {
        imgSrc: "/assets/carousel/request.svg"
    },
    {
        imgSrc: "/assets/carousel/Stella Sync Logo.png"
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
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center mb--10'>
                <div className="mx-auto max-w-md px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="py-14">
                        <Slider ref={this.sliderRef} {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <Image src={item.imgSrc} alt={fileNames[i]} width={150} height={150}/>
                                </div>
                            )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}
