"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import Autoplay from "embla-carousel-autoplay"






  const cardData = [
    {
      title: "NORTH AMERICA WIDE COVERAGE",
      text: "",
      description: "",
      backgroundImage: "/assets/images/gps.jpeg"

    },
    {
      title: "ADVANCED GPS TRUCKING TECHNOLOGY",
      text: " ",

      backgroundImage: '/assets/images/gpshand.jpeg'
    },
    {
      title: "OVERSIZED CARGO AND CUSTOMS-BONDED SHIPMENTS",

      backgroundImage: '/assets/images/oversize.jpeg'
    },
    // Add more cards as needed
  ];

export default function Home() {

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImageLoaded(true)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, []);



  return (
    <>

    <section className=" bg-contain py-5 md:py-10 bg-dotted-pattern ">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">

        <h3 className="h1-bold text-custom-color">
          "Efficiency in Motion"
        </h3>

        <p className="font-bold text-xl text-black">
           Experience the Power of Precision with Sameer Trucking Inc, your
           trusted partner in seamless trucking solutions. 

        </p>

        <Button size='lg' asChild className=" w-full sm:w-fit bg-custom-color text-lg">
          <Link href='/contact'>
            <span className="font-bold text-lg text-white">CONTACT US</span>
          </Link>
        </Button>
        </div>


      <div className={`sm: flex justify-center opacity-0 ${imageLoaded ? 'opacity-100 transition-opacity duration-1000' : ''}`}>

<Carousel className="w-full max-w-xs"
       plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
        <CarouselContent className="flex items-center">
          {cardData.map((card, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6" style={{ 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${card.backgroundImage})` }}>
                    <h3 className="text-xl text-slate-100 font-bold">{card.title}</h3>
                    <p className="text-lg ">{card.text}</p>
                    <p className="text-sm text-gray-500 mt-1">{card.description}</p>
                    {/* Add more elements as needed */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

      </div>
    </section>



    <section className="flex justify-center bg-contain">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center">
        <div className="flex flex-col justify-center gap-8">
          <Image 
          src='/assets/images/truck2.jpeg'
          alt="truck"
          height={1000}
          width={1000}
          className="rounded"
          
          />

        </div>

          <div className="flex flex-col items-center justify-center px-6">
                    <h2 className="text-xl font-bold">
                      Welcome To Sameer Trucking INC.
                    </h2>

                    <p>
                      Find out more about what we do, get to know our trucking solutions and services.
                    </p>

                    <Button className="bg-custom-color">
                      <Link href='/solutions'>
                          Solutions
                      </Link>
                    </Button>
          </div>
      </div>
    </section>









    </>
  );
}
