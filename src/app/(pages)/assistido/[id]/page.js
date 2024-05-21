'use client'

import { useState, useEffect } from 'react';
import { GetAssistedData } from "@/api/assistedData"
import { usePathname } from 'next/navigation'
import { jwtDecode } from "jwt-decode";
import { format, parseISO, differenceInYears } from 'date-fns'
import { uploadDirect } from '@uploadcare/upload-client'
import { UpdateAssessment } from '@/api/assessment';
import { UpdateAnalises } from '@/api/analises';
import { listApplicatores } from '@/api/applicatores';
import { UpdateProgram } from '@/api/programs';

import * as LR from '@uploadcare/blocks';
import Image from "next/image";
import Preanalise from "@/assets/preanalise.svg"
import Avaliar from "@/assets/avaliar.svg"
import Programa from "@/assets/programa.svg"
import Profile3 from "@/assets/profile3.svg"
import Link from 'next/link';
import File from '@/assets/file.svg'

LR.registerBlocks(LR);

export default function Profile() {
    const pathname = usePathname().split("/")
    const token = localStorage.getItem('session')
    const decoded = jwtDecode(token);
    const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    const id = pathname[2]
    const [generalData, setGeneralData] = useState('')
    const [applicatoresData, setApplicatoresData] = useState('')
    const [pageContent, setPageContent] = useState()
    const [colorDefine, setColorDefine] = useState("principal")

    useEffect(() => {
        const fetchApplicatores = async () => {
            const applicatoresData = await listApplicatores(token)
            setApplicatoresData(applicatoresData)
        }

        fetchApplicatores();
    }, []);

    useEffect(() => {
        const fetchAssistedData = async () => {
            const assistedData = await GetAssistedData(id, token)
            setGeneralData(assistedData)
            setPageContent(Principal(assistedData))
        }

        fetchAssistedData();
    }, []);

    function setPrincipal() {
        setPageContent(Principal(generalData))
        setColorDefine("principal")
    }
    function setAnalise() {
        setPageContent(Analise(generalData.preAnalysisId))
        setColorDefine("analise")
    }
    function setAvaliacao() {
        setPageContent(Avaliacao(generalData.assessmentId))
        setColorDefine("avaliacao")
    }
    function setProgramas() {
        setPageContent(Programas(applicatoresData, generalData.programId))
        setColorDefine("programas")
    }

    return (
        <div className=" flex md:ml-12">
            <nav className=" flex flex-col justify-start items-center w-64 bg-[#0000000e] max-md:hidden">
                <div className=" bg-[#3182B0] flex justify-center items-center w-32 h-32 rounded-full mb-9 mt-8 overflow-hidden">
                    <Image className=" w-full"
                        src={generalData.photo}
                        width={1000}
                        height={1000}
                        alt="profile"
                    />
                </div>
                <ul className={` ${role == 'Responsible' ? 'hidden' : 'flex'} flex-col justify-evenly items-start w-full h-80`}>
                    <li className={`${colorDefine == "principal" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <button onClick={setPrincipal} className="profilenav">
                            <Image className=" w-4 mr-6 ml-6"
                                src={Profile3}
                                alt="profile"
                            />
                            <label>PRINCIPAL</label>
                        </button>
                    </li>
                    <li className={`${colorDefine == "analise" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <button onClick={setAnalise} className="profilenav">
                            <Image className=" w-4 mr-6 ml-6"
                                src={Preanalise}
                                alt="Pré-Analise"
                            />
                            <label>PRÉ-ANALISE</label>
                        </button>
                    </li>
                    <li className={`${colorDefine == "avaliacao" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <button onClick={setAvaliacao} className="profilenav">
                            <Image className=" w-4 mr-6 ml-6"
                                src={Avaliar}
                                alt="Avaliar"
                            />
                            <label>AVALIAÇÃO</label>
                        </button>
                    </li>
                    <li className={`${colorDefine == "programas" ? "bg-[#66b7e64d]" : "bg-transparent"} w-full py-1 hover:bg-[#66b7e64d] transition duration-150`}>
                        <button onClick={setProgramas} className="profilenav">
                            <Image className=" w-5 mr-5 ml-6"
                                src={Programa}
                                alt="Programa"
                            />
                            <label>PROGRAMAS</label>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className=" w-screen">
                <section className="flex justify-around items-center mt-7">
                    <ul className="p-4 ml-10">
                        <li className="flex flex-col mb-2">
                            <label className="text-[#00000062] font-semibold">Nome</label>
                            <label className="font-medium">{generalData.name ? generalData.name : 'Nome do Assistido'}</label>
                        </li>
                        <li className="flex flex-col mb-2">
                            <label className="text-[#00000062] font-semibold">Data de Nascimento</label>
                            <label className="font-medium">{generalData.birthDate ? format(parseISO(generalData.birthDate), 'dd/MM/yyyy') : 'Nome do Assistido'}</label>
                        </li>
                        <li className="flex flex-col">
                            <label className="text-[#00000062] font-semibold">Idade</label>
                            <label className="font-medium">{generalData.birthDate ? `${differenceInYears(new Date(), parseISO(generalData.birthDate))} Anos` : 'Idade Indisponível'}</label>
                        </li>
                    </ul>
                    <div className="border border-black h-44"></div>
                    <ul className="p-4 mr-10">
                        <li className="flex flex-col mb-2">
                            <label className="text-[#00000062] font-semibold">Responsável</label>
                            <label className="font-medium">{generalData.nameResponsible ? generalData.nameResponsible : 'Nome do Assistido'}</label>
                        </li>
                        <li className="flex flex-col mb-2">
                            <label className="text-[#00000062] font-semibold">CPF</label>
                            <label className="font-medium">{generalData.cpfResponsible ? generalData.cpfResponsible : 'Nome do Assistido'}</label>
                        </li>
                        <li className="flex flex-col">
                            <label className="text-[#00000062] font-semibold">Contato</label>
                            <label className="font-medium">{generalData.contact ? generalData.contact : 'Nome do Assistido'}</label>
                        </li>
                    </ul>
                </section>
                {pageContent}
            </div>
        </div>
    )
}

function Principal(data) {

    console.log(data)
    return (
        <section className=" flex flex-col justify-center items-center w-full mt-16 mb-6">
            <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border mb-4">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Seletividade, aversões e preferencias
                </div>
                <div className="collapse-content">
                    <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                        <label className=" font-semibold mr-4">Seletividades:</label>
                        <p className=" text-[#0000005e]">
                            {data.foodSelectivity ? data.foodSelectivity : 'Seletividades'}
                        </p>
                    </div>
                    <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                        <label className=" font-semibold mr-4">Aversões:</label>
                        <p className="text-[#0000005e]">
                            {data.aversions ? data.aversions : 'Aversões'}
                        </p>
                    </div>
                    <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center">
                        <label className=" font-semibold mr-4">Preferencias:</label>
                        <p className="text-[#0000005e]">
                            {data.preferences ? data.preferences : 'Preferencias'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Pré-análise
                </div>
                <div className="collapse-content">
                    <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                        <label className=" font-semibold mr-4">Atividades:</label>
                        <p className=" text-[#0000005e]">{data.proposedActivity ? data.proposedActivity : 'Pendente'}</p>
                    </div>
                    <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                        <label className=" font-semibold mr-4">Habilidades:</label>
                        <p className="text-[#0000005e]">{data.identifiedSkills ? data.identifiedSkills : 'Pendente'}</p>
                    </div>
                    <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center mb-4">
                        <label className=" font-semibold mr-4">Duração:</label>
                        <p className="text-[#0000005e]">{data.finalDuration ? data.finalDuration : 'Pendente'}</p>
                    </div>
                    <div className=" w-full bg-white p-3 rounded-md flex justify-start items-center">
                        <label className=" font-semibold mr-4">Protocolo:</label>
                        <p className=" text-[#0000005e]">{data.protocol ? data.protocol : 'Pendente'}</p>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Avaliação
                </div>
                <div className="collapse-content">
                    <Link target="_blank" href={data.childAssessment ? data.childAssessment : ''} className=" w-full bg-white p-3 rounded-md flex justify-between items-center mb-4">
                        <label htmlFor='file' className=" font-semibold text-[#0000005e] ml-4">{data.childAssessment ? 'Abrir Arquivo' : 'Pendente'}</label>
                        <Image id='file' className='mr-4'
                            src={File}
                            width={25}
                            height={25}
                            alt="file"
                        />
                    </Link>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-[90%] rounded-md bg-[#00000009] border mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Relatório
                </div>
                <div className="collapse-content">
                    <Link target="_blank" href={data.medicalRecord ? data.medicalRecord : ''} className=" w-full bg-white p-3 rounded-md flex justify-between items-center mb-4">
                        <label htmlFor='file' className=" font-semibold text-[#0000005e] ml-4">{data.medicalRecord ? 'Abrir Arquivo' : 'Pendente'}</label>
                        <Image id='file' className='mr-4'
                            src={File}
                            width={25}
                            height={25}
                            alt="file"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

function Analise(id) {
    async function updateAnalises(e) {
        e.preventDefault();
        const form = e.target;

        const token = localStorage.getItem('session')
        const formData = new FormData(form);
        const jsonObject = Object.fromEntries(formData);

        const response = await UpdateAnalises(jsonObject, token, id)
        console.log(response)
        window.location.reload()
    }

    return (
        <form onSubmit={updateAnalises} className=" p-2 mt-2 flex flex-col justify-center items-center">
            <div className=" w-[90%] mb-4">
                <label className=" font-bold ml-2">Informe a atividade proposta do assistido</label>
                <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="proposedActivity" id="proposedActivity" placeholder="Digite Aqui" />
            </div>
            <div className=" w-[90%] mb-4">
                <label className=" font-bold ml-2">Duração Final</label>
                <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="finalDuration" id="finalDuration" placeholder="Digite Aqui" />
            </div>
            <div className=" w-[90%] mb-4">
                <label className=" font-bold ml-2">Habilidades Identificadas</label>
                <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="identifiedSkills" id="identifiedSkills" placeholder="Digite Aqui" />
            </div>
            <div className=" w-[90%]">
                <label className=" font-bold ml-2">protocolo</label>
                <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="protocol" id="protocol" placeholder="Digite Aqui" />
            </div>
            <div className=" p-2 mt-4 flex justify-center items-center">
                <button type='submit' className=" mb-2 py-2 px-20 bg-[#3082B0] rounded-md text-white border-2 border-[#3082B0]">
                    Salvar
                </button>
            </div>
        </form>
    )
}

function Avaliacao(id) {
    async function updateAssessment(e) {
        e.preventDefault();
        const token = localStorage.getItem('session')
        const form = e.target;
        const formData = new FormData(form);
        const response = await uploadDirect(formData.get('assessment'), {
            publicKey: 'a2166f02a764165d9357',
            store: 'auto',
        })
        const body = {
            "childAssessment": response.cdnUrl
        }

        const r = await UpdateAssessment(body, token, id)
        window.location.reload()
    }

    return (
        <form onSubmit={updateAssessment} className=" flex flex-col justify-center items-center w-full">
            <div className=" p-3 flex flex-col w-[90%] rounded-md bg-[#00000009] mt-20">
                <div className=" font-semibold mb-1">Avaliação</div>
                <div className=" w-full bg-white p-3 rounded-md flex justify-between items-center">
                    <input required id='assessment' name="assessment" type="file" accept='.png,.jpg' className="file-input file-input-ghost w-full" />
                </div>
            </div>
            <div className=" p-2 mt-14 flex justify-center items-center mb-6">
                <button type='submit' className=" mt-10 py-2 px-20 bg-[#3082B0] rounded-md text-white border-2 border-[#3082B0]">
                    Salvar
                </button>
            </div>
        </form>
    )
}

function Programas(applicatoresData, id) {
    let applicatoresContent = []

    async function updateProgram(e) {
        e.preventDefault();
        const token = localStorage.getItem('session')
        const form = e.target;
        const formData = new FormData(form);
        const jsonObject = Object.fromEntries(formData);

        const body = {
            activityDescription: jsonObject['activityDescription'],
            stimuliUsed: jsonObject['stimuliUsed'],
            idApplicator: document.getElementById('idApplicator').value,
            protocolType: Number(jsonObject['protocolType']),
            programType:  Number(jsonObject['programType'])
        }

        const response = await UpdateProgram(body, token, id)
        window.location.reload()
    }

    function applicatores() {
        applicatoresData.employees.forEach(element => {
            applicatoresContent.push(
                <option value={element.id}>{element.name}</option>
            )
        });
    }
    applicatores()

    return (
        <form onSubmit={updateProgram} className=" p-2 mt-2 flex flex-col justify-center items-center">
            <div className=" w-[90%] mb-4 flex flex-col">
                <label className=" font-bold ml-2">Protocolo</label>
                <select className="select select-bordered border-black shadow-md w-full" name='protocolType' id='protocolType'>
                    <option disabled selected>Não Informado</option>
                    <option value={1}>VBMAPP</option>
                    <option value={2}>ABLS</option>
                    <option value={3}>AFLS</option>
                    <option value={4}>SOCIALLYSAVVY</option>
                </select>
            </div>
            <div className=" w-[90%] mb-4 flex flex-col">
                <label className=" font-bold ml-2">Aplicador</label>
                <select className="select select-bordered border-black shadow-md w-full" id='idApplicator'>
                    <option disabled selected>Não Informado</option>
                    {applicatoresContent}
                </select>
            </div>
            <div className=" w-[90%] mb-4 flex flex-col">
                <label className=" font-bold ml-2">Definir Programa</label>
                <select className="select select-bordered border-black shadow-md w-full" name='programType' id='programType'>
                    <option disabled selected>Não Informado</option>
                    <option value={1}>Mando</option>
                    <option value={2}>Contato visual</option>
                    <option value={3}>Espera</option>
                    <option value={4}>Sentar</option>
                    <option value={5}>Tato</option>
                    <option value={6}>Intraverbal</option>
                    <option value={7}>Ecoico</option>
                    <option value={8}>Seguimento de instrução</option>
                    <option value={9}>Imitação motora</option>
                    <option value={10}>Pareamento</option>
                    <option value={11}>DAV - discriminação auditiva visual</option>
                    <option value={12}>LRFCC - resposta de ouvinte função classe e característica</option>
                </select>
            </div>
            <div className=" w-[90%] mb-4">
                <label className=" font-bold ml-2">Descrição da Atividade</label>
                <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="stimuliUsed" id="stimuliUsed" placeholder="Digite Aqui" />
            </div>
            <div className=" w-[90%]">
                <label className=" font-bold ml-2">Estímulos Utilizados</label>
                <input className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md" type="text" name="activityDescription" id="activityDescription" placeholder="Digite Aqui" />
            </div>
            <div className=" p-2 mt-4 flex justify-center items-center">
                <button type='submit' className=" mb-2 py-2 px-20 bg-[#3082B0] rounded-md text-white border-2 border-[#3082B0]">
                    Salvar
                </button>
            </div>
        </form>
    )
}