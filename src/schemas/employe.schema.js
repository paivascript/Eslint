import { Schema, model } from "mongoose";

const EmployeSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  jobTitle: { type: String },
  companyName: { type: String },
}, {timestamps: true});

export default model("Employe", EmployeSchema);