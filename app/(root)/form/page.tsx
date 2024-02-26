'use client'

import React from 'react'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


import { eventFormSchema } from "@/lib/validator";
import { useRouter } from "next/navigation";



const DriverForm = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof eventFormSchema>> ({
        resolver: zodResolver(eventFormSchema),
        defaultValues: {
            emailAddress: ""
        }
    });

    const handleSubmit = async (values: z.infer<typeof eventFormSchema>) => {
        if (!values) throw new Error("Missing values");
    
        try {
            await fetch('https://shuhabtruck.vercel.app/api/driver', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values)
            });
    
             router.push('/')
        } catch (error) {
            // Handle errors or log them
            console.error("Error during fetch:", error);
        }
    };
    

  return (
    <main className='flex min-h-screen flex-col items-center justify-betweenp py-24'>



        <h1>Personal Information</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>

            


                <FormField control={form.control} name='FirstName' render={({field}) => {
                    return <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input placeholder='First Name' type='text' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>



                <FormField control={form.control} name='MiddleName' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                            <Input placeholder='Middle Name' type='text' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>


       

                <FormField control={form.control} name='LastName' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input placeholder='Last Name' type='text' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>

      
        <div className='flex flex-col justify-center items-center border-t-2 pt-6'>
        <h1>Address</h1>
        </div>
    

        <FormField control={form.control} name='CurrentStreet' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Current Stree Address</FormLabel>
                        <FormControl>
                            <Input placeholder='Current Street' type='text' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>





                    <FormField control={form.control} name='City' render={({field}) => {
                    return <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input placeholder='City' type='text' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>


                    <FormField control={form.control} name='Province' render={({field}) => {
                    return <FormItem>
                        <FormLabel>State/Province</FormLabel>
                        <FormControl>
                            <Input placeholder='' type='text' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>

            <FormField control={form.control} name='Zip' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Zip/Postal Code</FormLabel>
                        <FormControl>
                            <Input placeholder='' type='text' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>


            <FormField control={form.control} name='emailAddress' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Email adress</FormLabel>
                        <FormControl>
                            <Input placeholder='Email adress' type='email' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>

            
        <FormField control={form.control} name='CellPhone' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Cell Phone</FormLabel>
                        <FormControl>
                            <Input placeholder='Cell Phone' type='tel' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>


                <div>
                        <h1>Hiring Process:  </h1>
                    <p>Minimum 3 years verified AZ/Class 1 driving experience</p>
                </div>

                <Button className='w-full bg-black' type='submit'>
                    Submit
                </Button>

     
            </form>

        </Form>
        </main>
  )
}

export default DriverForm