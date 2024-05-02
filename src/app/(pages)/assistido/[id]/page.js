'use client'

import { useState } from "react";
// import { GetAssistedData } from "@/api/assistedData"
import { usePathname } from 'next/navigation'

import Image from "next/image";
import Profile2 from "@/assets/profilenav.svg"
import Preanalise from "@/assets/preanalise.svg"
import Avaliar from "@/assets/avaliar.svg"
import Programa from "@/assets/programa.svg"
import Profile3 from "@/assets/profile3.svg"
import Pei from "@/assets/pei.svg"

export default function Profile() {
    const pathname = usePathname().split("/")
    const id = pathname[1]
    console.log(id)
    const data = ''

    const [colorDefine, setColorDefine] = useState("principal")
    const [pageContent, setPageContent] = useState(Principal())
    function setPrincipal() {
        setPageContent(Principal())
        setColorDefine("principal")
    }
    function setAnalise() {
        setPageContent(Analise())
        setColorDefine("analise")
    }
    function setAvaliacao() {
        setPageContent(Avaliacao())
        setColorDefine("avaliacao")
    }
    function setProgramas() {
        setPageContent(Programas())
        setColorDefine("programas")
    }
    function setPEI() {
        setPageContent(Peipdi())
        setColorDefine("pei")
    }
    

    return (
        <>
            <main className=" flex md:ml-12 h-screen">
                <nav className=" flex flex-col justify-start items-center w-64 h-full bg-[#0000000e] max-md:hidden">
                    <div className=" bg-[#3182B0] flex justify-center items-center w-32 h-32 rounded-full mb-9 mt-8">
                        <Image className=" w-1/2"
                            src={Profile2}
                            alt="profile"
                        />
                    </div>
                    <ul className=" flex flex-col justify-evenly items-start w-full h-80">
                        <li className={`${colorDefine == "principal" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                            <button onClick={setPrincipal} className="profilenav">
                                <Image className=" w-4 mr-6 ml-6"
                                    src={Profile3}
                                    alt="profile"
                                />
                                <span>PRINCIPAL</span>
                            </button>
                        </li>
                        <li className={`${colorDefine == "analise" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                            <button onClick={setAnalise} className="profilenav">
                                <Image className=" w-4 mr-6 ml-6"
                                    src={Preanalise}
                                    alt="Pré-Analise"
                                />
                                <span>PRÉ-ANALISE</span>
                            </button>
                        </li>
                        <li className={`${colorDefine == "avaliacao" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                            <button onClick={setAvaliacao} className="profilenav">
                                <Image className=" w-4 mr-6 ml-6"
                                    src={Avaliar}
                                    alt="Avaliar"
                                />
                                <span>AVALIAÇÃO</span>
                            </button>
                        </li>
                        <li className={`${colorDefine == "programas" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                            <button onClick={setProgramas} className="profilenav">
                                <Image className=" w-5 mr-5 ml-6"
                                    src={Programa}
                                    alt="Programa"
                                />
                                <span>PROGRAMAS</span>
                            </button>
                        </li>
                        <li className={`${colorDefine == "pei" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                            <button onClick={setPEI} className="profilenav">
                                <Image className=" w-4 mr-6 ml-6"
                                    src={Pei}
                                    alt="Archive"
                                />
                                <span>PEI/PDI</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className=" w-screen">
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
                    {pageContent}
                </div>
            </main>
        </>
    )
}

function Principal() {
    return (
        <>
            <h1>Principal</h1>
        </>
    )
}

function Analise() {
    return (
        <>
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
        </>
    )
}

function Avaliacao() {
    return (
        <>
            <h1>Avaliacao</h1>
        </>
    )
}

function Programas() {
    return (
        <>
            <h1>Programas</h1>
        </>
    )
}

function Peipdi() {
    return (
        <>
            <h1>PEI/PDI</h1>
        </>
    )
}