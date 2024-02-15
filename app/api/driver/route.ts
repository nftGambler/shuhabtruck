

import Event from "@/lib/database/models/event";
import { connectToDatabase } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";




import { eventFormSchema } from "@/lib/validator";



export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { emailAddress, Province, City, Zip, FirstName, MiddleName, LastName, CurrentStreet, CellPhone } = eventFormSchema.parse(
      await req.json()
    );

    await connectToDatabase();


    await Event.create({
      emailAddress,
      Province,
      City,
      Zip,
      FirstName,
      MiddleName,
      LastName,
      CurrentStreet,
      CellPhone,
    });

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.error("Validation Error:", error.errors);
    return NextResponse.json({ error: "Validation Error", details: error.errors }, { status: 400 });
  }
}
