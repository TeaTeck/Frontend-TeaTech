'use client'

import { ProfileNav } from "@/components/profilenav"
import Assisted from "@/components/assisted"

export default function Analise() {

    return (
        <>
            <main className=" flex md:ml-12">
                <ProfileNav />
                <div className=" w-screen">
                    <Assisted/>
                    <form className=" p-2 mt-2 flex flex-col justify-center items-center">
                        <div className=" w-[90%] mb-4">
                            <label className=" font-bold ml-2">Informe a atividade proposta do assistido</label>
                            <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="name" id="name" placeholder="Digite Aqui" />
                        </div>
                        <div className=" w-[90%] mb-4">
                            <label className=" font-bold ml-2">Habilidades Identificadas</label>
                            <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="name" id="name" placeholder="Digite Aqui" />
                        </div>
                        <div className=" w-[90%] mb-4">
                            <label className=" font-bold ml-2">Duração Final</label>
                            <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="name" id="name" placeholder="Digite Aqui" />
                        </div>
                        <div className=" w-[90%]">
                            <label className=" font-bold ml-2">protocolo</label>
                            <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="name" id="name" placeholder="Digite Aqui" />
                        </div>
                        <div className=" p-2 mt-4 flex justify-center items-center">
                            <button className=" mb-2 mr-20 py-2 px-12 bg-[#3081b011] rounded-md text-[#3082B0] border-2 border-[#3082B0]">
                                Voltar
                            </button>
                            <button className=" mb-2 py-2 px-12 bg-[#3082B0] rounded-md text-white border-2 border-[#3082B0]">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}