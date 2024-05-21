'use client'

import { listAssisted } from "@/api/assistedList"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Search from "@/assets/search.svg"
import Image from 'next/image'
import Trash from "@/assets/trash.svg"
import Edit from "@/assets/pencil-square.svg"


export default function Lista() {
    const pathname = usePathname().split("/")
    const token = localStorage.getItem('session')
    const pageNumber = parseInt(pathname[2])
    const [searchData, setSearchData] = useState('')
    const [assistedData, setAssistedData] = useState(
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
    );

    useEffect(() => {
        const fetchAssistedData = async () => {
            let assisteds = []
            const listContent = await listAssisted(pageNumber, token, searchData);
            if (listContent) {
                listContent.filterChildAssisteds.forEach(child => {
                    let hidden = child.preAnalysisStatusCode == 1 ? "flex" : "hidden";

                    assisteds.push(
                        <li key={child.id} className=" w-full flex justify-evenly items-center border border-[#00000015] shadow-sm">
                            <div className="list flex">
                                <spam>{child.name}</spam>
                            </div>
                            <div className="list md:flex hidden">
                                <spam>{child.email}</spam>
                            </div>
                            <div className="list md:flex hidden">
                                <spam>{child.contact}</spam>
                            </div>
                            <div className="list flex justify-between">
                                <Link href={`/assistido/${child.id}`} className={` mr-2 bg-[#c22121] rounded-lg p-2 text-white font-bold items-center justify-center ${hidden} text-[10px]`}>
                                    <label>PRÉ-ANALISE</label>
                                </Link>
                                <Link href={`/assistido/${child.id}`} className=" mr-2 p-1 max-md:p-2 bg-[#66B8E6] rounded-sm items-center justify-center flex">
                                    <Image
                                        src={Edit}
                                        width={20}
                                        height={20}
                                        alt="edit"
                                    />
                                </Link>
                                <button className=" p-1 max-md:p-2 bg-[#000000] rounded-sm items-center justify-center flex">
                                    <Image
                                        src={Trash}
                                        width={20}
                                        height={20}
                                        alt="trash"
                                    />
                                </button>
                            </div>
                        </li>
                    );
                });

                setAssistedData(assisteds);
            }
        }

        fetchAssistedData();
    }, [searchData]);

    function searchEvent(e) {
        e.preventDefault()
        const formData = e.target;
        setSearchData(formData.elements[0].value)
    }

    return (
        <main className=" mt-9 max-md:mt-28 ml-3 md:ml-14 w-[95%] flex flex-col justify-center items-center">
            <form onSubmit={searchEvent} className=" flex justify-start items-center bg-[#0000000e] w-[90%] rounded-lg shadow-md">
                <input type="text" id="search" placeholder="Buscar Assistido" className=" outline-none bg-transparent w-full p-2 ml-2" />
                <button type="submit">
                    <Image
                        src={Search}
                        width={20}
                        height={20}
                        alt="search"
                        className=" mr-5 my-1"
                    />
                </button>
            </form>
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
                        {assistedData}
                    </ul>
                </div>
                <div className="join flex justify-end mt-6 mb-6">
                    <Link href={`/listagem/${pageNumber > 1 ? pageNumber - 1 : pageNumber}`} className="join-item btn">«</Link>
                    <button className="join-item btn">Page {pageNumber}</button>
                    <Link href={`/listagem/${pageNumber + 1}`} className="join-item btn">»</Link>
                </div>
            </section>
        </main>
    )
}