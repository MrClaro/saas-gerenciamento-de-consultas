import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deletePatient } from "@/actions/delete-patient";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { Trash2Icon } from "lucide-react";

interface DeletePatientDialogProps {
  patientId: string;
  patientName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DeletePatientDialog = ({
  patientId,
  patientName,
  open,
  onOpenChange,
}: DeletePatientDialogProps) => {
  const deletePatientAction = useAction(deletePatient, {
    onSuccess: () => {
      toast.success("Paciente deletado com sucesso");
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(
        `Erro: ${error.error.serverError || "Ocorreu um erro ao deletar o paciente"}`,
      );
    },
  });

  const handleDelete = () => {
    deletePatientAction.execute({ id: patientId });
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Deletar paciente?</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja excluir <strong>{patientName}</strong>? Esta
            ação não pode ser desfeita e excluirá permanentemente este paciente
            e todas as informações relacionadas.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={deletePatientAction.isPending}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deletePatientAction.isPending}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {deletePatientAction.isPending ? "Excluindo..." : "Excluir"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePatientDialog;
