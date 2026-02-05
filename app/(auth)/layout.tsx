import { MotionGrid } from "@/components/ui/motion-grid";

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
      <div className="hidden h-full items-center justify-center text-center lg:flex">
        <MotionGrid
          speed={3}
          opacity={0.15}
          enableGlow={true}
          lineColor="20, 184, 166"
          className="relative flex h-full w-full flex-col items-center justify-start"
        >
          <div className="mt-45">
            <div className="flex items-center justify-center">
              <span className="text-9xl font-extralight">F</span>
              <span className="mt-6 text-8xl font-light text-black">inx</span>
            </div>

            <p className="mt-6 max-w-md text-lg text-black">
              Finx is a modern personal finance app to track expenses, manage
              bank accounts, and understand your cash flow.
            </p>
          </div>
        </MotionGrid>
      </div>
    </div>
  );
}
