'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

import Profile2 from "@/assets/profilenav.svg"
import Preanalise from "@/assets/preanalise.svg"
import Avaliar from "@/assets/avaliar.svg"
import Programa from "@/assets/programa.svg"
import Profile3 from "@/assets/profile3.svg"
import Pei from "@/assets/pei.svg"

export function ProfileNav() {

    const pathname = usePathname().split("/")
    const childId = pathname[1]
    const colorDefine = pathname[2]

    return (
        <main>
            <nav className=" flex flex-col justify-start items-center w-48 h-full bg-[#0000000e] max-md:hidden">
                <div className=" bg-[#3182B0] flex justify-center items-center w-32 h-32 rounded-full mb-9 mt-8">
                    <Image className=" w-1/2"
                        src={Profile2}
                        alt="profile"
                    />
                </div>
                <ul className=" flex flex-col justify-evenly items-start w-full h-80">
                    <li className={`${colorDefine == "principal" ? "bg-[#66b7e64d]" : "bg-transparent" } w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <Link href={`/${childId}/principal`} className="profilenav">
                            <Image className=" w-4 mr-6 ml-6"
                                src={Profile3}
                                alt="profile"
                            />
                            <span>PRINCIPAL</span>
                        </Link>
                    </li>
                    <li className={`${colorDefine == "analise" ? "bg-[#66b7e64d]" : "bg-transparent" } w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <Link href={`/${childId}/analise`} className="profilenav">
                            <Image className=" w-4 mr-6 ml-6"
                                src={Preanalise}
                                alt="Pré-Analise"
                            />
                            <span>PRÉ-ANALISE</span>
                        </Link>
                    </li>
                    <li className={`${colorDefine == "avaliacao" ? "bg-[#66b7e64d]" : "bg-transparent" } w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <Link href={`/${childId}/avaliacao`} className="profilenav">
                            <Image className=" w-4 mr-6 ml-6"
                                src={Avaliar}
                                alt="Avaliar"
                            />
                            <span>AVALIAÇÃO</span>
                        </Link>
                    </li>
                    <li className={`${colorDefine == "programas" ? "bg-[#66b7e64d]" : "bg-transparent" } w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <Link href={`/${childId}/programas`} className="profilenav">
                            <Image className=" w-5 mr-5 ml-6"
                                src={Programa}
                                alt="Programa"
                            />
                            <span>PROGRAMAS</span>
                        </Link>
                    </li>
                    <li className={`${colorDefine == "pei" ? "bg-[#66b7e64d]" : "bg-transparent" } w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <Link href={`/${childId}/pei`} className="profilenav">
                            <Image className=" w-4 mr-6 ml-6"
                                src={Pei}
                                alt="Archive"
                            />
                            <span>PEI/PDI</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}