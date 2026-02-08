import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <div className="relative mb-1 hidden h-9 w-18.75 items-center lg:flex">
        <Image
          src="/logo-full.svg"
          alt="Finx logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
