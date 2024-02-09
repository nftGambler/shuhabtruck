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

    <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center'>
            <Image
            src='/assets/images/contactus.png'
            alt='contact logo'
            width={1000}
            height={1000}
            className='image-container max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
            />

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
                    <AccordionTrigger>
                 
                        Phone:</AccordionTrigger>
                    <AccordionContent>
                        +1 438 923 234
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
                    <AccordionTrigger>
                        Email:
                        </AccordionTrigger>
                    <AccordionContent>
                        shuhabsulatni@gmail.com
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
                    <AccordionTrigger>
                        Office Location:
                        </AccordionTrigger>
                    <AccordionContent>
                        Canada: Mississauga ON, Montreal QC
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