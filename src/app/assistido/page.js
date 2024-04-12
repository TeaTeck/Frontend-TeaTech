'use client'

import { Navbar } from "@/components/navbar"

export default function Assistido() {

    async function onSubmit(event) {
        event.preventDefault();

        const formData = event.target;
        const elements = Array.from(formData.elements);
        const body = {};

        elements.forEach(element => {
            if (!element.value == "") {
                body[element.id] = element.value;
            }
        });

        const response = await fetch(`http://localhost:5149/api/childAssisted/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body)
        });
        
        console.log(response.status)
    }

    return (
        <>
            <Navbar />
            <main className=" mt-5 md:ml-12 self-center justify-self-center w-[95%]">
                <h2 className=" md:ml-24 ml-5 mb-10 font-bold text-2xl">Cadastrar Assistido</h2>
                <form onSubmit={onSubmit} className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center pb-5">
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Nome do Assisitdo*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="name" id="name" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Data de Nascimento*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="date" name="birthDate" id="birthDate" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Seletividade Alimentar</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="foodSelectivity" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Aversões</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="aversions" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Preferências</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="preferences" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Laudo Medico</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="medicalRecord" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Imagem</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="photo" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Email*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="email" id="email" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">CPF do Responsavel*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="responsibleCpfOne" id="responsibleCpfOne" placeholder="Digite apenas numeros" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Nome do Responsavel*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="nameResponsibleOne" id="nameResponsibleOne" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Parentesco do Responsavel*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="responsibleKinshipOne" id="responsibleKinshipOne" placeholder="Ex: pai, mãe..." className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Nome do Segundo Responsavel</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="nameResponsibleTwo" id="nameResponsibleTwo" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Parentesco do Segundo Responsavel</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="responsibleKinshipTwo" id="responsibleKinshipTwo" placeholder="Ex: pai, mãe..." className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">CPF do Segundo Responsavel</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="responsibleCpfTwo" id="responsibleCpfTwo" placeholder="Digite apenas numeros" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Contato*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="contactOne" id="contactOne" placeholder="819********" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label className=" font-bold ml-2">Segundo Contato</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="contactTwo" id="contactTwo" placeholder="819********" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <button className=" w-[70%] bg-[#3182B0] p-5 rounded-lg md:col-span-3 text-white font-semibold shadow-md hover:bg-white hover:text-[#01499C] transition duration-300">
                        Realizar cadastro
                    </button>
                </form>
            </main>
        </>
    )
}