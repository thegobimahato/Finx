"use client";

import { AddCircleHalfDotIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { columns, Payment } from "./columns";

import { DataTable } from "@/components/dashboard/accounts/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "723452f",
    amount: 400,
    status: "pending",
    email: "am@example.com",
  },
];

const AccountsPage = () => {
  const newAccount = useNewAccount();

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl px-3 pb-10 lg:px-14">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-col gap-y-2 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">
              Accounts overview
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Manage and organize your financial accounts
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
            filterKey="emails"
            columns={columns}
            data={data}
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
