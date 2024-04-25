'use client'

import { Navbar } from "@/components/navbar"
import { ProfileNav } from "@/components/profilenav"
import { usePathname } from 'next/navigation'
import { GetAssistedById } from "@/api/gets"


export default async function Analise() {

    const pathname = usePathname().split("/")
    const Id = pathname[2]
    const AssistedData = await GetAssistedById(Id)

    console.log(AssistedData)

    const data = new Date(AssistedData.birthDate);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são de 0 a 11, então adicionamos 1
    const ano = data.getFullYear().toString();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Calcular a idade
    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - data.getFullYear();

    // Ajustar se o aniversário ainda não ocorreu no ano atual
    let m = dataAtual.getMonth() - data.getMonth();
    if (m < 0 || (m === 0 && dataAtual.getDate() < data.getDate())) {
        idade--;
    }

    return (
        <>
            <Navbar />
            <main className=" flex md:ml-12">
                <ProfileNav />
                <div className=" w-screen">
                    <section className=" flex justify-around items-center mt-7">
                        <ul className="p-4 ml-10">
                            <li className=" flex flex-col mb-2">
                                <span className=" text-[#00000062] font-semibold">Nome</span>
                                <span className=" font-medium">{AssistedData.name}</span>
                            </li>
                            <li className=" flex flex-col mb-2">
                                <span className=" text-[#00000062] font-semibold">Data de Nascimento</span>
                                <span className=" font-medium">{dataFormatada}</span>
                            </li>
                            <li className=" flex flex-col">
                                <span className=" text-[#00000062] font-semibold">Idade</span>
                                <span className=" font-medium">{idade} Anos</span>
                            </li>
                        </ul>
                        <div className=" border border-black h-44"></div>
                        <ul className="p-4 mr-10">
                            <li className=" flex flex-col mb-2">
                                <span className=" text-[#00000062] font-semibold">Responsável</span>
                                <span className=" font-medium">{AssistedData.responsible.nameResponsibleOne}</span>
                            </li>
                            <li className=" flex flex-col mb-2">
                                <span className=" text-[#00000062] font-semibold">CPF</span>
                                <span className=" font-medium">{AssistedData.responsible.responsibleKinshipOne}</span>
                            </li>
                            <li className=" flex flex-col">
                                <span className=" text-[#00000062] font-semibold">Contato</span>
                                <span className=" font-medium">{AssistedData.responsible.contactOne}</span>
                            </li>
                        </ul>
                    </section>
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
                    </form>
                    <section className=" p-2 mt-4 flex justify-center items-center">
                        <button className=" mb-2 mr-20 py-2 px-12 bg-[#3081b011] rounded-md text-[#3082B0] border-2 border-[#3082B0]">
                            Voltar
                        </button>
                        <button className=" mb-2 py-2 px-12 bg-[#3082B0] rounded-md text-white border-2 border-[#3082B0]">
                            Salvar
                        </button>
                    </section>
                </div>
            </main>
        </>
    )
}