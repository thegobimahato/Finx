import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <div className="group mb-1 hidden items-center lg:flex">
        <Image
          src={"./logo-full.svg"}
          alt="Finx logo"
          width={75}
          height={40}
          priority
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
