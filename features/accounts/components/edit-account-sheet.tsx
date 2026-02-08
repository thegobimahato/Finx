import { z } from "zod";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Spinner2 } from "@/components/ui/spinner2";

import { useConfirm } from "@/hooks/use-confirm";

import { useDeleteAccount } from "../api/use-delete-account";
import { useEditAccount } from "../api/use-edit-account";
import { useGetAccount } from "../api/use-get-account";
import { useOpenAccount } from "../hooks/use-open-account";
import AccountForm from "./account-form";

import { insertAccountSchema } from "@/db/schema";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

const EditAccountSheet = () => {
  const { isOpen, onClose, id } = useOpenAccount();

  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete the transactions",
  );

  const accountQuery = useGetAccount(id);
  const editMutation = useEditAccount(id);
  const deleteMutation = useDeleteAccount(id);

  const isEditing = editMutation.isPending;
  const isDeleting = deleteMutation.isPending;

  const isLoading = accountQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      };

  return (
    <>
      <ConfirmDialog />

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="flex flex-col gap-6">
          <SheetHeader>
            <SheetTitle>Edit Account</SheetTitle>
            <SheetDescription>
              Update your account details and save changes.
            </SheetDescription>
          </SheetHeader>

          {isLoading ? (
            <div className="flex flex-1 items-center justify-center py-12">
              <Spinner2 />
            </div>
          ) : (
            <AccountForm
              id={id}
              onSubmit={onSubmit}
              isEditing={isEditing}
              isDeleting={isDeleting}
              defaultValues={defaultValues}
              onDelete={onDelete}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default EditAccountSheet;
