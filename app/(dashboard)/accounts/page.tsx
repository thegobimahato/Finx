"use client";

import { AddCircleHalfDotIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { columns } from "./columns";

import { DataTable } from "@/components/dashboard/accounts/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { useBulkDeleteAccounts } from "@/features/accounts/api/use-bulk-delete";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

const AccountsPage = () => {
  const newAccount = useNewAccount();
  const deleteAccounts = useBulkDeleteAccounts();

  const accountQuery = useGetAccounts();
  const accounts = accountQuery.data || [];

  const isDisabled = accountQuery.isLoading || deleteAccounts.isPending;

  if (accountQuery.isLoading) {
    return (
      <div className="mx-auto -mt-24 w-full max-w-screen-2xl px-3 pb-6 lg:px-14">
        <Card className="border-none drop-shadow-sm">
          <CardHeader className="flex flex-col gap-y-2 md:flex-row md:items-center md:justify-between">
            <div className="mt-2 flex flex-col gap-3">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-5 w-64" />
            </div>

            <Skeleton className="h-10 w-36" />
          </CardHeader>

          <CardContent>
            <div className="flex h-84 w-full items-center justify-center">
              <Spinner className="size-6 text-black dark:text-white" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl px-3 pb-10 lg:px-14">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">
              Accounts overview
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Create and manage multiple financial accounts in one place.
            </p>
          </div>

          <Button onClick={newAccount.onOpen} className="w-full gap-2 md:w-fit">
            <HugeiconsIcon
              icon={AddCircleHalfDotIcon}
              size={18}
              strokeWidth={1.5}
            />
            New account
          </Button>
        </CardHeader>

        <CardContent>
          <DataTable
            filterKey="name"
            columns={columns}
            data={accounts}
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteAccounts.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
