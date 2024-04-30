import Trash from "@/assets/trash.svg"
import Edit from "@/assets/pencil-square.svg"
import Image from 'next/image'
import Link from 'next/link'

export async function listAssisted(pageNumber) {

    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/filterByData?pageNumber=${pageNumber}&pageSize=5`, {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await response.json()
        let assisteds = []

        if (data) {
            data.childAssisteds.forEach(child => {
                let hidden = child.preAnalysisStatusCode == 1 ? "flex" : "hidden";

                assisteds.push(
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
                        <div className="list flex justify-between">
                            <Link href={`/perfil/${child.id}/analise`} className={` mr-2 bg-[#c22121] rounded-lg p-2 text-white font-bold items-center justify-center ${hidden} text-[10px]`}>
                                <span>PRÉ-ANALISE</span>
                            </Link>
                            <Link href={`/perfil/${child.id}/principal`} className=" mr-2 p-1 max-md:p-2 bg-[#66B8E6] rounded-sm items-center justify-center flex">
                                <Image
                                    src={Edit}
                                    width={20}
                                    height={20}
                                    alt="edit"
                                />
                            </Link>
                            <button className=" p-1 max-md:p-2 bg-[#000000] rounded-sm items-center justify-center flex">
                                <Image
                                    src={Trash}
                                    width={20}
                                    height={20}
                                    alt="trash"
                                />
                            </button>
                        </div>
                    </li>
                );
            });
        }

        return assisteds
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            console.error('Não foi possível estabelecer uma conexão com o servidor.');
        }
    }
}