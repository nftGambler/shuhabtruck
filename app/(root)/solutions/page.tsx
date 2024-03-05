
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'


import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


  const cardData = [
    {
      title: "FTL Service",
      text: "Full Truckload (FTL) Deck Transportation",
      description: "",
      backgroundImage: "/assets/images/"

    },
    {
      title: "LTL Service",
      text: "Less Than Load Deck Transportation",
      description: "",
    },
    {
      title: "OD loads Service",
      text: "Over-Dimensional Transportation",
      description: "",
    },
    // Add more cards as needed
  ];


const Solutions = () => {



    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setImageLoaded(true)
      }, 500)
  
      return () => clearTimeout(timeoutId)
    }, []);
  


  return (
    <>
    <section className='flex justify-center bg-contain bg-dotted-pattern'>

        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center'> 
            <div className='flex flex-col justify-center gap-8'>
                <h3 className='h3-bold text-custom-color'>
                    OUR FOCUS
                </h3>

                <p className='font-bold text-lg'>
                We specialize in delivering comprehensive flatbed transport services
                 tailored to the unique needs of the mining, 
                 manufacturing, oil & gas, material fabrication, forestry, construction, and steel sectors.
                </p>

                <p className='font-bold text-lg'>
                Dedicated to delivering superior service quality and ongoing innovation to enhance our solutions, we have become a trusted ally for customers across a wide range of industries.
                </p>

            </div>





                
            <div className={`sm: flex justify-center opacity-0 ${imageLoaded ? 'opacity-100 transition-opacity duration-1000' : ''}`}>

<Carousel className="w-full max-w-xs  "

    >
        <CarouselContent className='flex items-center'>
          {cardData.map((card, index) => (
            <CarouselItem key={index} className=''>
              <div className="p-1">
                <Card className="bg-footer-custom">
                  <CardContent className="flex  flex-col items-center justify-center p-6 text-white" style={{ 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${card.backgroundImage})` }}>
                    <h3 className="text-xl font-medium py-2 text-black">{card.title}</h3>
                    <p className="text-lg py-6 text-black">{card.text}</p>
                    <p className="text-sm mt-1 text-black">{card.description}</p>

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
          src='/assets/images/ftll.jpeg'
          alt="truck"
          height={1000}
          width={1000}
          className='rounded  max-h-[70vh] '
          />

        </div>


        <div className="flex flex-col items-center justify-center px-6">
                    <h2 className="text-xl font-bold">
                      FULL TRUCKLOAD(FTL)
                    </h2>

                    <p className='text-lg py-6'> 
                      
                        FTL (Full Truckload) 
                        transportation is an exclusive
                        shipping 
                        solution where an entire truck is dedicated to transporting 
                        a single client's goods. Ideal for businesses with large shipments, 
                        FTL ensures direct, efficient, and secure point-to-point 
                        delivery without stops or shared space.
                      

                    </p>

                    <p className='py-6 text-lg'>

                    This service is perfect for those needing fast, reliable, and streamlined transportation for bulk or high-value goods, 
                        optimizing the supply chain and ensuring timely 
                        deliveries.

                    </p>

                
          </div>

      </div>

    </section>




    <section className="flex justify-center bg-contain">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center">
        <div className="flex flex-col justify-center gap-8">


        <div className="flex flex-col items-center justify-center px-6">
                    <h2 className="text-xl font-bold">
                      LESS THAN TRUCKLOAD(LTL)
                    </h2>

                    <p className='text-lg py-6'> 
                      
    
                    We prioritize efficiency without compromising on the quality of service. Trust us to handle your partial shipments with the same commitment 
                    and attention to detail that we bring to every aspect of our transportation solutions.
                    </p>

                    <p className='py-6 text-lg'>
                    LTL(Less Than Truckload)  Our LTL shipping solution is tailored to meet your unique needs, 
                    providing a cost-effective and reliable option for transporting goods that don't require a full truck.

                    </p>

                
          </div>

     

        </div>

        <Image 
          src='/assets/images/ltlll.jpeg'
          alt="truck"
          height={1000}
          width={1000}
          className='rounded  max-h-[70vh] '
          />
    

      </div>

    </section>





    <section className="flex justify-center bg-contain">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center">
        <div className="flex flex-col justify-center gap-8">

          <Image 
          src='/assets/images/oversized.jpeg'
          alt="truck"
          height={1000}
          width={1000}
          className='rounded  max-h-[70vh] '
          />

        </div>


        <div className="flex flex-col items-center justify-center px-6">
                    <h2 className="text-xl font-bold">
                      Over Dimensional(OD) 
                    </h2>

                    <p className='text-lg py-6'> 
                      
                        OD (Over Dimensional) 
            
                        Choose <span className='font-bold text-custom-color'>SAMEER TRUCKING INC.</span> for your Over Dimensional Service needs,
                         and experience a reliable and professional 
                         approach to transporting oversized cargo. 
                    </p>

                    <p className='py-6 text-lg'>
                    Your specialized shipments are in capable hands with our dedicated team, 
                         ensuring a smooth and secure journey from pick-up to delivery.
                    </p>

                
          </div>

      </div>

    </section>



    <section className="flex justify-center bg-contain">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center">
        <div className="flex flex-col justify-center gap-8">


        <div className="flex flex-col items-center justify-center px-6">
                    <h2 className="text-xl font-bold">
                      Enhanced GPS Tracking Technology
                    </h2>

                    <p className='text-lg py-6'> 
                    The power of advanced GPS technology to revolutionize your transportation experience. With our state-of-the-art tracking system, we provide real-time visibility into the location of your trucks, ensuring you have precise and up-to-the-minute information at your fingertips.
                  
                    </p>

                    <p className='py-6 text-lg'>
                    Our advanced GPS technology goes beyond traditional tracking, offering a comprehensive solution that enhances the efficiency and security of your shipments. Now, you can monitor your fleet in real time, optimize routes, and make informed decisions instantly. 
                    </p>

                
          </div>


        

        </div>

        <Image 
          src='/assets/images/solutions.jpeg'
          alt="truck"
          height={1000}
          width={1000}
          className='rounded  max-h-[70vh] '
          />


      </div>

    </section>


    </>
  )
}

export default Solutions

