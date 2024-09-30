import john from "../public/assets/images/dr-green.png"
import scheduled from "/assets/icons/check.svg"
import pending from "/assets/icons/pending.svg"
import cancel from "/assets/icons/cancelled.svg"
import d2 from "../public/assets/images/dr-cameron.png"
import d3 from "../public/assets/images/dr-livingston.png"
import d4 from "../public/assets/images/dr-peter.png"
import d5 from "../public/assets/images/dr-powell.png"
import d6 from "../public/assets/images/dr-remirez.png"
import d7 from "../public/assets/images/dr-lee.png"
import d8 from "../public/assets/images/dr-cruz.png"
import d9 from "../public/assets/images/dr-sharma.png"
export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  name:"",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: john,
    name: "John Green",
  },
  {
    image: d2,
    name: "Leila Cameron",
  },
  {
    image: d3,
    name: "David Livingston",
  },
  {
    image: d4,
    name: "Evan Peter",
  },
  {
    image: d5,
    name: "Jane Powell",
  },
  {
    image: d6,
    name: "Alex Ramirez",
  },
  {
    image:d7,
    name: "Jasmine Lee",
  },
  {
    image: d8,
    name: "Alyana Cruz",
  },
  {
    image: d9,
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};