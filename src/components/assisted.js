'use client'

import { GetAssistedData } from "@/api/assistedData"
import { usePathname } from 'next/navigation'

export default function assisted() {
    const pathname = usePathname().split("/")
    const id = pathname[2]
    const data = GetAssistedData(id)

    return (
        <>
            <section className="flex justify-around items-center mt-7">
                <ul className="p-4 ml-10">
                    <li className="flex flex-col mb-2">
                        <span className="text-[#00000062] font-semibold">Nome</span>
                        <span className="font-medium">{data.name ? data.name : 'Nome do Assistido'}</span>
                    </li>
                    <li className="flex flex-col mb-2">
                        <span className="text-[#00000062] font-semibold">Data de Nascimento</span>
                        <span className="font-medium">00/00/0000</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-[#00000062] font-semibold">Idade</span>
                        <span className="font-medium">00 Anos</span>
                    </li>
                </ul>
                <div className="border border-black h-44"></div>
                <ul className="p-4 mr-10">
                    <li className="flex flex-col mb-2">
                        <span className="text-[#00000062] font-semibold">Responsável</span>
                        <span className="font-medium">Nome do Responsavel</span>
                    </li>
                    <li className="flex flex-col mb-2">
                        <span className="text-[#00000062] font-semibold">CPF</span>
                        <span className="font-medium">000.000.000-00</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-[#00000062] font-semibold">Contato</span>
                        <span className="font-medium">(81) 98888-8888</span>
                    </li>
                </ul>
            </section>
        </>
    )
}