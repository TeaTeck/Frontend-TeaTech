'use client'

import { listAssisted } from "@/api/assistedList"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Search from "@/assets/search.svg"
import Left from "@/assets/chevron-left.svg"
import Right from "@/assets/chevron-right.svg"
import Image from 'next/image'

export default function Lista() {
    const pathname = usePathname().split("/")
    const pageNumber = parseInt(pathname[2])

    return (
        <main className=" mt-9 max-md:mt-28 ml-3 md:ml-14 w-[95%] flex flex-col justify-center items-center">
            <div className=" flex justify-start items-center bg-[#0000000e] w-[90%] rounded-lg shadow-md">
                <Image
                    src={Search}
                    width={20}
                    height={20}
                    alt="search"
                    className=" ml-4 my-1"
                />
                <input type="text" id="search" placeholder="Buscar Assistido" className=" outline-none bg-transparent w-full p-2 ml-2" />
            </div>
            <section className=" w-[90%] mt-8">
                <div className=" w-full py-3 pl-8 flex justify-start items-center bg-[#0003] shadow-lg">
                    <h2 className=" font-semibold">LISTA DE ASSISTIDOS</h2>
                </div>
                <div className=" w-full md:h-[42rem] h-[38rem]">
                    <ul className=" grid auto-rows-auto shadow-md h-full overflow-y-auto">
                        <li key="assisted" className=" w-full flex justify-evenly items-center border border-[#00000015] shadow-sm font-medium">
                            <div className="list flex">
                                <spam>Nome</spam>
                            </div>
                            <div className="list md:flex hidden">
                                <spam>Email</spam>
                            </div>
                            <div className="list md:flex hidden">
                                <spam>Contato</spam>
                            </div>
                            <div className="list flex">
                                <spam>Ações</spam>
                            </div>
                        </li>
                        {listContent(pageNumber)}
                    </ul>
                </div>
                <div className=" flex justify-end items-center w-full mt-5 mb-5 p-2">
                    <Link href={`/listagem/${pageNumber > 1 ? pageNumber - 1 : pageNumber}`} className="button-page mr-6 border-2 border-[#3082B0] w-[35px] py-1 rounded-sm items-center justify-center flex">
                        <Image
                            src={Left}
                            width={20}
                            height={20}
                            alt="search"
                        />
                    </Link>
                    <Link href={`/listagem/${pageNumber + 1}`} className="button-page mr-10 border-2 border-[#3082B0] w-[35px] py-1 rounded-sm items-center justify-center flex">
                        <Image
                            src={Right}
                            width={20}
                            height={20}
                            alt="search"
                        />
                    </Link>
                </div>
            </section>
        </main>
    )
}

async function listContent(pageNumber) {
    const listContent = await listAssisted(pageNumber)

    if (!listContent) {
        return (
            <>
                <li className=" w-full flex justify-evenly items-center border border-[#00000015] shadow-sm">
                    <div className="skeleton h-4 w-11/12"></div>
                </li>
                <li className=" w-full flex justify-evenly items-center border border-[#00000015] shadow-sm">
                    <div className="skeleton h-4 w-11/12"></div>
                </li>
                <li className=" w-full flex justify-evenly items-center border border-[#00000015] shadow-sm">
                    <div className="skeleton h-4 w-11/12"></div>
                </li>
                <li className=" w-full flex justify-evenly items-center border border-[#00000015] shadow-sm">
                    <div className="skeleton h-4 w-11/12"></div>
                </li>
                <li className=" w-full flex justify-evenly items-center border border-[#00000015] shadow-sm">
                    <div className="skeleton h-4 w-11/12"></div>
                </li>
            </>
        )
    }

    return listContent
}


