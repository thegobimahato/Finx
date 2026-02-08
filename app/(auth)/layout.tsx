import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left section */}
      <div className="flex h-full flex-col items-center justify-center">
        {children}
      </div>

      {/* Right section */}
      <div className="relative hidden h-full items-center justify-center bg-linear-to-b from-violet-400 to-violet-500 text-center lg:flex lg:flex-col">
        <div className="w-fit rounded bg-black/60 px-0.5 py-1">
          <Image
            src="/logo-full.svg"
            alt="Finx logo"
            width={75}
            height={40}
            priority
            className="h-auto w-18.75"
          />
        </div>

        <p className="text-muted/90 mt-6 max-w-md text-lg">
          Finx is a modern personal finance app to track expenses, manage bank
          accounts, and understand your cash flow.
        </p>
      </div>
    </div>
  );
}
