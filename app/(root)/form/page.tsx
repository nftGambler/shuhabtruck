'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import React from 'react'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


  import { toast } from "@/components/ui/use-toast"



const formSchema = z.object({
    emailAddress: z.string().email(),
    'First Name': z.string().min(3),
    'Middle Name': z.string().min(3),
    'Last Name': z.string().min(3),
    'Current Street': z.string().min(3),
    'Cell Phone': z.string().min(3),
    Province: z.string().min(3),
    City: z.string().min(3),
    Zip: z.string().min(3),
    dob: z.date({
        required_error: 'A date of birth is required'
    }),
});






const DriverForm = () => {

    const form = useForm<z.infer<typeof formSchema>> ({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: ""
        }
    });


    const handleSubmit = () => {
        console.log('worked')
    }

  return (
    <main className='flex min-h-screen flex-col items-center justify-betweenp py-24'>

        <h1>Personal Information</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>


                <FormField control={form.control} name='First Name' render={({field}) => {
                    return <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input placeholder='First Name' type='name' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>



                <FormField control={form.control} name='Middle Name' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                            <Input placeholder='Middle Name' type='name' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>


       

                <FormField control={form.control} name='Last Name' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input placeholder='Last Name' type='name' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>

                



            
                
            <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                                )}
                            >
                            {field.value ? (
                                format(field.value, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                            }
                             initialFocus
                                />
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                            
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
          )}
        />

        <div className='flex flex-col justify-center items-center border-t-2 pt-6'>
        <h1>Address</h1>
        </div>
    

        <FormField control={form.control} name='Current Street' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Current Stree Address</FormLabel>
                        <FormControl>
                            <Input placeholder='Current Street' type='name' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>




                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="United States">United States</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                    </Select>



                    <FormField control={form.control} name='City' render={({field}) => {
                    return <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input placeholder='City' type='name' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>


                    <FormField control={form.control} name='Province' render={({field}) => {
                    return <FormItem>
                        <FormLabel>State/Province</FormLabel>
                        <FormControl>
                            <Input placeholder='' type='name' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>

            <FormField control={form.control} name='Zip' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Zip/Postal Code</FormLabel>
                        <FormControl>
                            <Input placeholder='' type='name' {...field}/>
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

            
        <FormField control={form.control} name='Cell Phone' render={({field}) => {
                    return <FormItem>
                        <FormLabel>Cell Phone</FormLabel>
                        <FormControl>
                            <Input placeholder='Cell Phone' type='number' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>

                <Button className='w-full bg-black' type='submit'>
                    Submit
                </Button>
            </form>

        </Form>
        </main>
  )
}

export default DriverForm