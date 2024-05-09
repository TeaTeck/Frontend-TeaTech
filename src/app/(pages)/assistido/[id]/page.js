'use client'

import { useState, useEffect } from 'react';
import { GetAssistedData } from "@/api/assistedData"
import { usePathname } from 'next/navigation'

import * as LR from '@uploadcare/blocks';
import Image from "next/image";
import Preanalise from "@/assets/preanalise.svg"
import Avaliar from "@/assets/avaliar.svg"
import Programa from "@/assets/programa.svg"
import Profile3 from "@/assets/profile3.svg"
import Pei from "@/assets/pei.svg"

LR.registerBlocks(LR);

export default function Profile() {
    const pathname = usePathname().split("/")
    const token = localStorage.getItem('session')
    const id = pathname[2]
    const [data, setData] = useState('')

    useEffect(() => {
        const fetchAssistedData = async () => {
            const assistedData = await GetAssistedData(id, token)
            setData(assistedData)

            console.log(data)
        }

        fetchAssistedData();
    }, []);

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
            <main className=" flex md:ml-12">
                <nav className=" flex flex-col justify-start items-center w-64 bg-[#0000000e] max-md:hidden">
                    <div className=" bg-[#3182B0] flex justify-center items-center w-32 h-32 rounded-full mb-9 mt-8 overflow-hidden">
                        <Image className=" w-full"
                            src='https://ucarecdn.com/5930a796-7602-4397-a65b-e098d8c499f0/teste.jpg'
                            width={1000}
                            height={1000}
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
            <section className=" flex flex-col justify-center items-center w-full mt-16 mb-6">
                <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border mb-4">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Seletividade, aversões e preferencias
                    </div>
                    <div className="collapse-content">
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Seletividades:</span>
                            <p className=" text-[#0000005e]">Seletividade de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Aversões:</span>
                            <p className="text-[#0000005e]">Aversões de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center">
                            <span className=" font-semibold mr-4">Preferencias:</span>
                            <p className="text-[#0000005e]">Preferencias de Teste</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border mb-4">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">
                        Pré-análise
                    </div>
                    <div className="collapse-content">
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Atividades:</span>
                            <p className=" text-[#0000005e]">Atividades de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Habilidades:</span>
                            <p className="text-[#0000005e]">Habilidades de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Duração:</span>
                            <p className="text-[#0000005e]">Duração de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center">
                            <span className=" font-semibold mr-4">Protocolo:</span>
                            <p className=" text-[#0000005e]">Protocolo de Teste</p>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border mb-4">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">
                        Avaliação
                    </div>
                    <div className="collapse-content">
                        <div className=" w-full bg-white p-3 rounded-md flex justify-between items-center mb-4">
                            <span className=" font-semibold text-[#0000005e] mr-4">Abrir Arquivo</span>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">
                        Programas
                    </div>
                    <div className="collapse-content">
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Protocolo:</span>
                            <p className=" text-[#0000005e]">Protocolo de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Aplicador:</span>
                            <p className="text-[#0000005e]">Aplicador de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Programa:</span>
                            <p className="text-[#0000005e]">Programa de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                            <span className=" font-semibold mr-4">Atividade:</span>
                            <p className=" text-[#0000005e]">Atividade de Teste</p>
                        </div>
                        <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center">
                            <span className=" font-semibold mr-4">Estímulos Utilizados:</span>
                            <p className=" text-[#0000005e]">Estímulos de Teste</p>
                        </div>
                    </div>
                </div>
            </section>
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
                    <button className=" mb-2 py-2 px-20 bg-[#3082B0] rounded-md text-white border-2 border-[#3082B0]">
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
            <section className=" flex flex-col justify-center items-center w-full">
                <div className=" p-3 flex flex-col w-[90%] rounded-md bg-[#00000009] mt-20">
                    <div className=" font-semibold mb-1">Avaliação</div>
                    <div className=" w-full bg-white p-3 rounded-md flex justify-between items-center">
                        <span className=" font-semibold text-[#00000042]">Anexar Arquivo</span>
                        <lr-config
                            ctx-name="my-uploader"
                            pubkey="a2166f02a764165d9357"
                            maxLocalFileSizeBytes={10000000}
                            multiple={false}
                            imgOnly={true}
                            sourceList="local, camera"
                            useCloudImageEditor={false}
                        ></lr-config>
                        <lr-file-uploader-regular
                            css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
                            ctx-name="my-uploader"
                            class="my-config"
                        ></lr-file-uploader-regular>
                    </div>
                </div>
                <div className=" p-2 mt-14 flex justify-center items-center mb-6">
                    <button className=" mt-10 py-2 px-20 bg-[#3082B0] rounded-md text-white border-2 border-[#3082B0]">
                        Salvar
                    </button>
                </div>
            </section>
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