import { Navbar } from "@/components/navbar"
import { listAssisted } from "@/api/list"
import Search from "@/assets/search.svg"
import Left from "@/assets/chevron-left.svg"
import Right from "@/assets/chevron-right.svg"
import Image from 'next/image'

export default async function Lista() {

    const lista = await listAssisted()

    function selectPage() {
        let pages = []

        for (let index = 0; index < lista.totalPages; index++) {
            pages.push(
                <option value={index + 1}>0{index + 1}</option>
            )
        }

        return pages
    }

    function listarAssistidos() {
        let assistidos = [];

        lista.childAssisteds.forEach(child => {
            assistidos.push(
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
                    <div className="list flex">
                        <spam>teste</spam>
                    </div>
                </li>
            );
        });

        return assistidos;
    }

    return (
        <>
            <Navbar />
            <main className=" mt-9 max-md:mt-28 md:ml-14 w-[95%] flex flex-col justify-center items-center">
                <div className=" flex justify-start items-center bg-[#0000000e] w-[90%] rounded-lg shadow-md">
                    <Image
                        src={Search}
                        width={20}
                        height={20}
                        alt="search"
                        className=" ml-4 my-1"
                    />
                    <input type="text" id="search" placeholder="Buscar Assistido" className=" outline-none bg-transparent w-full p-2 ml-2" />
                </div>
                <div className=" flex justify-end items-center w-full mt-6 p-2">
                    <select name="pets" id="pet-select" className=" mr-14 py-2 px-4 bg-[#0000000e] text-center">
                        {selectPage()}
                    </select>
                </div>
                <section className=" w-[90%] mt-2">
                    <div className=" w-full py-3 pl-8 flex justify-start items-center bg-[#0003] shadow-lg">
                        <h2 className=" font-semibold">LISTA DE ASSISTIDOS</h2>
                    </div>
                    <ul className=" w-full md:h-[30rem] h-[38rem] grid auto-rows-auto shadow-md">
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
                        {listarAssistidos()}
                    </ul>
                    <div className=" flex justify-end items-center w-full mt-5 mb-5 p-2">
                        <button className="button-page mr-6 border-2 border-[#3082B0] w-[35px] py-1 rounded-sm items-center justify-center flex">
                            <Image
                                src={Left}
                                width={20}
                                height={20}
                                alt="search"
                            />
                        </button>
                        <button className="button-page mr-10 border-2 border-[#3082B0] w-[35px] py-1 rounded-sm items-center justify-center flex">
                            <Image
                                src={Right}
                                width={20}
                                height={20}
                                alt="search"
                            />
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}