"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import UpsertDoctorForm from "./upsert-doctor-form";

const AddDoctorButton = (props: {}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Médico
        </Button>
      </DialogTrigger>
      <UpsertDoctorForm />
    </Dialog>
  );
};

export default AddDoctorButton;
