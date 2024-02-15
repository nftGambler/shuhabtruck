import React from 'react'
import Image from 'next/image'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Contact = () => {
  return (
    <>

    <section className='flex justify-center bg-contain bg-dotted-pattern'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center'>
            {/* <Image
            src='/assets/images/'
            alt='contact logo'
            width={1000}
            height={1000}
            className='image-container max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
            /> */}

            <div>
                <h1 className='h2-bold pb-4 text-custom-color'>Contact Information</h1>
                <p className='font-bold text-lg'>Your needs are important to us! 
                Our team is dedicated to providing exceptional service around the clock. 
              
                </p>

                <p className='py-6 text-lg font-bold'>
                Whether you have questions, require assistance, or need information, we're here for you 24/7. 
                Feel free to reach out at any time your satisfaction is our priority. Contact us confidently, and let us assist you promptly and effectively.
                </p>
            </div>

             <div className='flex w-full flex-col gap-8 p-5 md:p-10'>

             <Accordion type="single" collapsible className=''>

                <AccordionItem value="item-1">
                <Image 
                        src='/assets/icons/phoneicon.png'
                        alt='phone logo'
                        width={20}
                        height={20}
                        className='mr-2'
                        />
                    <AccordionTrigger className=''>
                 
                        Dispatch & Office:</AccordionTrigger>
                    <AccordionContent className=''>
                        +1 289 512 0811
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
                

            <Accordion type="single" collapsible>
                
                <AccordionItem value="item-1">

                <Image 
                        src='/assets/icons/emailicon.png'
                        alt='phone logo'
                        width={20}
                        height={20}
                        className='mr-2'
                        />
                    <AccordionTrigger className=''>
                        Email:
                        </AccordionTrigger>
                    <AccordionContent className=''>
                        dispatch@sameertin.com
                    </AccordionContent>
                </AccordionItem>

            </Accordion>



            <Accordion type="single" collapsible>
                
                <AccordionItem value="item-1">

                <Image 
                        src='/assets/icons/locationicon.png'
                        alt='phone logo'
                        width={20}
                        height={20}
                        className='mr-2'
                        />
                    <AccordionTrigger className=''>
                        Office Location:
                        </AccordionTrigger>
                    <AccordionContent className=''>
                        Canada: Courtice ON, Laval QC
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
                
                
            </div>   

       

  


        </div>

    </section>


    </>
  )
}

export default Contact