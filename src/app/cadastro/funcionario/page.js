import { Navbar } from "@/components/navbar";

export default function Funcionario() {
    return (
        <>
            <Navbar />
            <main className="mt-5 md:ml-14 w-[95%]">
                <h2 className="md:ml-24 ml-5 mb-10 font-bold text-2xl">Cadastrar Funcionario</h2>
                <form className="w-full flex gap-5 items-center pb-5">
                    <div className="w-full ml-40 grid grid-cols-2 gap-x-0 gap-y-10">
                        <section className="w-[70%]">
                            <label className="font-bold ml-2">Nome completo</label>
                            <div className="w-full p-[10px] border border-gray-700 rounded-lg bg-white shadow-md">
                                <input type="text" name="name" id="name" placeholder="Digite Aqui" className="ml-1 pl-1 w-full h-full outline-none" />
                            </div>
                        </section>
                        <section className="w-[35%]">
                            <label className="font-bold ml-2">CPF</label>
                            <div className="w-full p-[10px] border border-gray-700 rounded-lg bg-white shadow-md">
                                <input type="text" name="cpf" id="cpf" placeholder="Digite o CPF" className="ml-1 pl-1 w-full h-full outline-none" />
                            </div>
                        </section>
                        <section className="w-[35%]">
                            <label className="font-bold ml-2">E-mail</label>
                            <div className="w-full p-[10px] border border-gray-700 rounded-lg bg-white shadow-md">
                                <input type="email" name="email" id="email" placeholder="Digite o e-mail" className="ml-1 pl-1 w-full h-full outline-none" />
                            </div>
                        </section>
                        <section className="w-[35%]">
                            <label className="font-bold ml-2">Ocupação:</label>
                            <div className="flex items-center ml-1">
                                <input type="radio" name="ocupacao" id="coordenacao" value="coordenacao" className="mr-1" />
                                <label htmlFor="coordenacao">Coordenação</label>
                            </div>
                            <div className="flex items-center ml-1">
                                <input type="radio" name="ocupacao" id="aplicador" value="aplicador" className="mr-1" />
                                <label htmlFor="aplicador">Aplicador</label>
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-center fixed bottom-2 left-0 w-full">
                        <button className="bg-[#3082B0] p-5 rounded-lg text-white font-semibold text-xl shadow-md hover:bg-white hover:text-[#01499C] transition duration-300 mr-5">
                            Voltar
                        </button>
                        <button className="bg-[#3182B0] p-5 rounded-lg text-white font-semibold text-xl shadow-md hover:bg-white hover:text-[#01499C] transition duration-300">
                            Salvar
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}