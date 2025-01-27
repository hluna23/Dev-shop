import { litleFont } from "@/config/fonts";
import Link from "next/Link";
import Image from "next/image";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${litleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho</p>

        <p>
          <span>Puedes regresar al </span>
          <Link href="/" className="font-normal hover:inderline transition-all">
            Inicio
          </Link>
        </p>
      </div>

      <div className="px-5  mx-5 ">
        <Image
          src="/imgs/starman_750x750.png"
          alt=" Starma"
          className=" p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
