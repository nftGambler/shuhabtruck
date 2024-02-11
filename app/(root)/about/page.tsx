'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const About = () => {

    const [textLoaded, setTextLoaded] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTextLoaded(true)
        }, 500)

        return () => clearTimeout(timeoutId)
    }, []);


  return (
    <>
        <section className='flex justify-center bg-contain bg-dotted-pattern'>
            <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center'>
                <Image 
                src='/assets/images/blue.jpeg'
                alt="truck logo"
                width={1000}
                height={1000}
                className='rounded'
                />

                <div className={`flex w-full flex-col gap-8 p-5 md:p-10 opacity-0 ${textLoaded ? ' opacity-100 transition-opacity duration-1000': ''}`}>
                    <div className='flex flex-col gap-6'>

                        <h2 className='h2-bold'>About Us</h2>
                        <p className='font-bold text-lg '>

                                Welcome to Sameer Trucking Inc, where excellence meets reliability in the world of transportation. 
                                With a strong presence in both Canada and the United States, 
                                we take pride in our impeccable reputation for delivering top-notch trucking services.
                        </p>

                         <p className='font-bold text-lg'>
                            
                                At Sameer Trucking Inc, punctuality is at the core of our operations.
                                 We understand the critical importance of timely deliveries, 
                                 and our dedicated team works tirelessly to ensure that your goods reach their destination without any delays.
                                
                        </p>  
                    </div>

                </div>

            </div>

        </section>
    </>
  )
}

export default About