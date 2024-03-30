import { Navbar } from "@/components/navbar"
import Image from "next/image";
import Upload from "@/assets/upload.svg"

export default function Assistido() {
    return (
        <>
            <Navbar />
            <main className=" mt-5 md:ml-12 self-center justify-self-center w-[95%]">
                <h2 className=" md:ml-24 ml-5 mb-10 font-bold text-2xl">Cadastrar Assistido</h2>
                <form className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center pb-5">
                    <section className=" w-[70%] bg-[#3182B0] p-5 rounded-lg">
                        <label for="file-upload" className=" flex justify-start items-center">
                            <Image className=" w-16"
                                src={Upload}
                                alt="Upload"
                            />
                            <spam className=" ml-4 font-semibold text-white">Foto do Assisitdo</spam>
                        </label>
                        <input type="file" id="file-upload" className=" hidden" />
                    </section> 
                    <section className=" w-[70%] bg-[#3182B0] p-5 rounded-lg">
                        <label for="file-upload" className=" flex justify-start items-center">
                            <Image className=" w-16"
                                src={Upload}
                                alt="Upload"
                            />
                            <spam className=" ml-4 font-semibold text-white">Laudo Medico</spam>
                        </label>
                        <input type="file" id="file-upload" className=" hidden" />
                    </section>
                    <section className=" w-[90%]">
                        <label for="nomeAssistido" className=" font-bold ml-2">Nome do Assisitdo*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input required type="text" name="nomeAssistido" id="nomeAssistido" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="date" className=" font-bold ml-2">Data de Nascimento*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input required type="date" name="date" id="date" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="nomeResponsavel" className=" font-bold ml-2">Nome do Responsavel*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input required type="text" name="nomeResponsavel" id="nomeResponsavel" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="parentescoResponsavel" className=" font-bold ml-2">Parentesco*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input required type="text" name="parentescoResponsavel" id="parentescoResponsavel" placeholder="Ex: pai, mãe..." className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="CPF" className=" font-bold ml-2">CPF*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input required type="text" name="CPF" id="CPF" placeholder="Digite apenas numeros" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="nomeSegundoResponsavel" className=" font-bold ml-2">Nome do Segundo Responsavel</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="nomeSegundoResponsavel" id="nomeSegundoResponsavel" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="parentescoSegundoResponsavel" className=" font-bold ml-2">Parentesco</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="parentescoSegundoResponsavel" id="parentescoSegundoResponsavel" placeholder="Ex: pai, mãe..." className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="CPF" className=" font-bold ml-2">CPF</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="CPF" id="CPF" placeholder="Digite apenas numeros" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="email" className=" font-bold ml-2">Email*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input required type="text" name="email" id="email" placeholder="Digite Aqui" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="Contato" className=" font-bold ml-2">Contato*</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input required type="text" name="Contato" id="Contato" placeholder="819********" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="Contato2" className=" font-bold ml-2">Contato</label>
                        <div className=" w-full p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <input type="text" name="Contato2" id="Contato2" placeholder="819********" className=" ml-1 pl-1 w-full h-full outline-none" />
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="Seletividade" className=" font-bold ml-2">Seletividade Alimentar</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="seletividade" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="Aversoes" className=" font-bold ml-2">Aversões</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="Aversoes" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
                        </div>
                    </section>
                    <section className=" w-[90%]">
                        <label for="Preferencias" className=" font-bold ml-2">Preferências</label>
                        <div className=" w-full h-16 p-[10px] border border-gray-700 rounded-lg bg-whit shadow-md">
                            <textarea id="Preferencias" className=" w-full h-full outline-none resize-none" placeholder="Digite Aqui"></textarea>
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