"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import UpsertDoctorForm from "./upsert-doctor-form";
import { useState } from "react";

const AddDoctorButton = (props: {}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Médico
        </Button>
      </DialogTrigger>
      <UpsertDoctorForm onSuccess={() => setIsOpen(false)} />
    </Dialog>
  );
};

export default AddDoctorButton;
