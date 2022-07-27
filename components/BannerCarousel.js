import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import images from "../assets";


export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop autoPlay centerMode centerSlidePercentage={90} showStatus={false} showThumbs={false}>
        <div className="relative" >
          <Image className="rounded-2xl blur-sm" src={images.land} width={1440} objectFit="cover" />
          <div className="absolute top-0 left-3 px-6 py-4 md:invisible">
            <h4 className="mt-20 text-4xl font-semibold tracking-tight text-white text-left outline-black">YOUR FIRST NFT<br /> LAND IN THE<br /> METAVERSE</h4>
            <button className="flex justify-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Buy Now
            </button>
          </div>
          <div className="absolute top-2 right-3 px-6 py-4 md:invisible">
            <Image className="rounded-lg transition ease-in-out delay-150 " src={images.land} width={450} height={250} />
          </div>
        </div>
        <div>
          <Image className="rounded-2xl blur-sm" src={images.Hotcollection} layout="fill" objectFit="cover" />
          <div className="absolute top-0 left-3 px-6 py-4 md:invisible">
            <h4 className="mt-20 text-4xl font-semibold tracking-tight text-white text-left outline-black">The HOTTEST COLLECTION <br /> OF NFTs <br /> YET. </h4>
            <button className="flex justify-start bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
              Check them out
            </button>
          </div>
          <div className="absolute top-2 right-3 px-6 py-4 md:invisible">
            <Image className="rounded-lg transition ease-in-out delay-150 " src={images.Hotcollection} width={500} height={250} />
          </div>
        </div>
        <div>
          <Image className="rounded-2xl blur-sm" src={images.kangpunch} layout="fill" objectFit="cover" />
          <div className="absolute top-0 left-3 px-6 py-4 md:invisible">
            <h4 className="mt-20 text-4xl font-semibold tracking-tight text-white text-left outline-black">ONE OF THE BEST <br /> PLAY-TO-EARN<br /> NFTs GAMES OUT THERE.</h4>
            <button className="flex justify-start bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 border border-amber-700 rounded">
              Play Now
            </button>
          </div>
          <div className="absolute top-2 right-3 px-6 py-4 md:invisible">
            <Image className="rounded-lg transition ease-in-out delay-150 " src={images.kangpunch} width={500} height={250} />
          </div>
        </div>
        <div>
          <Image className="rounded-2xl blur-sm" src={images.nftband} layout="fill" objectFit="cover" />
          <div className="absolute top-0 left-3 px-6 py-4 md:invisible">
            <h4 className="mt-20 text-4xl font-semibold tracking-tight text-white text-left outline-black">GET TO KNOW MORE<br />ABOUT THE LATEST <br /> NFT BAND IN TOWN.</h4>
            <button className="flex justify-start bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 border border-indigo-700 rounded">
              Learn More
            </button>
          </div>
          <div className="absolute top-2 right-3 px-6 py-4 md:invisible">
            <Image className="rounded-lg transition ease-in-out delay-150 " src={images.nftband} width={500} height={250} />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
