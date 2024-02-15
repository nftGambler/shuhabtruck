import * as z from "zod"

export const eventFormSchema = z.object({
    emailAddress: z.string().email(),
    FirstName: z.string().min(3),
    MiddleName: z.string().min(3),
    LastName: z.string().min(3),
    CurrentStreet: z.string().min(3),
    CellPhone: z.string().min(3),
    Province: z.string().min(3),
    City: z.string().min(3),
    Zip: z.string().min(3),
    // dob: z.date({
    //     required_error: 'A date of birth is required'
    // }),
});
