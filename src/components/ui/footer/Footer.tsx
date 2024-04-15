import Link from "next/link";


import { litleFont } from "@/config/fonts";

export const Footer = () => {
  return (

    <div className="flex w-full justify-center text-xs mb-10">

      <Link href='/'>
        <span className={` ${ litleFont.className } antialised font-bold `}>Dev </span>
        <span className={` ${ litleFont.className } antialised  `}>| shop</span>
        <span>© {new Date(). getFullYear() }</span>
      </Link>

    </div>
  )
}


