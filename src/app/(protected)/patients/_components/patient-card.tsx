import React from "react";

type Patient = {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  gender?: "male" | "female";
};

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div className="border rounded p-4">
      <h3 className="font-bold text-lg">{patient.name}</h3>
      <p>Email: {patient.email}</p>
      {patient.phoneNumber && <p>Phone: {patient.phoneNumber}</p>}
      {patient.gender && <p>Gender: {patient.gender === "male" ? "Male" : "Female"}</p>}
    </div>
  );
};

export default PatientCard;

