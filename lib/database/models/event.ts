import { Document, Schema, model, models } from "mongoose";


// export interface IEvent extends Document {
//   _id: string;
//   emailAddress: string;
//     'First Name': string;
//     'Middle Name': string;
//     'Last Name': string;
//     'Current Street': string;
//     'Cell Phone': string;
//     Province: string;
//     City: string;
//     Zip: string;
//     dob: Date
// }

const EventSchema = new Schema({
    emailAddress: { type: String },
  FirstName: { type: String },
  MiddleName: { type: String },
  LastName: { type: String },
  CurrentStreet: { type: String },
  CellPhone: { type: String},
  Province: { type: String},
  City: { type: String },
  Zip: { type: String },
  // dob: { type: Date },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;






