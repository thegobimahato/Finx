"use client";

import { SortingAZ02Icon, SortingZA01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ColumnDef } from "@tanstack/react-table";
import { InferResponseType } from "hono";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { client } from "@/lib/hono";

export type ResponseType = InferResponseType<
  typeof client.api.accounts.$get,
  200
>["data"][0];

export const columns: ColumnDef<ResponseType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }) => {
      const isSorted = column.getIsSorted(); // false | "asc" | "desc"

      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => column.toggleSorting(isSorted === "asc")}
          className="flex items-center gap-2 -ml-3"
        >
          <span>Name</span>

          <AnimatePresence mode="wait" initial={false}>
            {isSorted === "asc" && (
              <motion.span
                key="asc"
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
              >
                <HugeiconsIcon
                  icon={SortingAZ02Icon}
                  size={16}
                  strokeWidth={1.5}
                />
              </motion.span>
            )}

            {isSorted === "desc" && (
              <motion.span
                key="desc"
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.12, ease: "easeOut" }}
              >
                <HugeiconsIcon
                  icon={SortingZA01Icon}
                  size={16}
                  strokeWidth={1.5}
                />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      );
    },
  },
];
