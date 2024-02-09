"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">

        <h3 className="h3-bold text-custom-color">
          Reliability, effeciency and unparalled service
        </h3>

        <p className="p-regular-20 md:p-regular-24">
           Experience the Power of Precision with Sameer Trucking Inc, your
           trusted partner in seamless trucking solutions. 

        </p>

        <Button size='lg' asChild className="button w-full sm:w-fit bg-custom-color">
          <Link href='/'>
            Explore Now
          </Link>
        </Button>
        </div>


      <div className={`image-container max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] opacity-0 ${imageLoaded ? 'opacity-100 transition-opacity duration-1000' : ''}`}>
      <Image 
        src="/assets/images/truck.png"
        alt='truck'
        width={1000}
        height={1000}
        className="max-h-[100%] object-contain object-center"
        />
      </div>
   

      </div>
    </section>


    </>
  );
}
