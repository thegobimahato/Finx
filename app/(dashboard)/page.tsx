import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <UserButton />
    </div>
  );
}
