import { zodResolver } from "@hookform/resolvers/zod";
import { Delete03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

import { insertAccountSchema } from "@/db/schema";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  isEditing?: boolean;
  isDeleting?: boolean;
};

const AccountForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  isEditing,
  isDeleting,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 p-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={isEditing}
                  placeholder="e.g. Cash, Bank, Credit Card"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isEditing || isDeleting}
          className="w-full"
        >
          {isEditing && <Spinner className="size-4" />}
          {id ? "Save changes" : "Create account"}
        </Button>

        {!!id && (
          <Button
            type="button"
            disabled={isDeleting}
            onClick={handleDelete}
            className="w-full"
            variant="outline"
          >
            <HugeiconsIcon
              icon={Delete03Icon}
              color="oklch(70.4% 0.191 22.216)"
              size={24}
              strokeWidth={1.5}
            />
            <span className="text-red-400">Delete account</span>
          </Button>
        )}
      </form>
    </Form>
  );
};

export default AccountForm;
