export async function GetAssistedData(id) {
    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/${id}`, {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await response.json()
        let assistedData

        if (data) {
            const age = ageCheck(data.birthDate)

            assistedData = (
                <section className=" flex justify-around items-center mt-7">
                    <ul className="p-4 ml-10">
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">Nome</span>
                            <span className=" font-medium">{data.name}</span>
                        </li>
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">Data de Nascimento</span>
                            <span className=" font-medium">{age['date']}</span>
                        </li>
                        <li className=" flex flex-col">
                            <span className=" text-[#00000062] font-semibold">Idade</span>
                            <span className=" font-medium">{age['age']}</span>
                        </li>
                    </ul>
                    <div className=" border border-black h-44"></div>
                    <ul className="p-4 mr-10">
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">Responsável</span>
                            <span className=" font-medium">{data.responsible.nameResponsibleOne}</span>
                        </li>
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">CPF</span>
                            <span className=" font-medium">{data.responsible.responsibleKinshipOne}</span>
                        </li>
                        <li className=" flex flex-col">
                            <span className=" text-[#00000062] font-semibold">Contato</span>
                            <span className=" font-medium">{data.responsible.contactOne}</span>
                        </li>
                    </ul>
                </section>
            )
        } else {
            assistedData = (
                <section className=" flex justify-around items-center mt-7">
                    <ul className="p-4 ml-10">
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">Nome</span>
                            <span className=" font-medium">0</span>
                        </li>
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">Data de Nascimento</span>
                            <span className=" font-medium">0</span>
                        </li>
                        <li className=" flex flex-col">
                            <span className=" text-[#00000062] font-semibold">Idade</span>
                            <span className=" font-medium">0 Anos</span>
                        </li>
                    </ul>
                    <div className=" border border-black h-44"></div>
                    <ul className="p-4 mr-10">
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">Responsável</span>
                            <span className=" font-medium">0</span>
                        </li>
                        <li className=" flex flex-col mb-2">
                            <span className=" text-[#00000062] font-semibold">CPF</span>
                            <span className=" font-medium">0</span>
                        </li>
                        <li className=" flex flex-col">
                            <span className=" text-[#00000062] font-semibold">Contato</span>
                            <span className=" font-medium">0</span>
                        </li>
                    </ul>
                </section>
            )
        }

        return assistedData
    } catch (error) {
        console.log(error)
    }
}

function ageCheck(birthDate) {
    let birthDateFormated = {}
    const date = new Date(birthDate);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0'); // Os meses são de 0 a 11, então adicionamos 1
    const ano = date.getFullYear().toString();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    let dataAtual = new Date();
    let age = dataAtual.getFullYear() - date.getFullYear();

    let m = dataAtual.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && dataAtual.getDate() < date.getDate())) {
        age--;
    }

    birthDateFormated['date'] = dataFormatada
    birthDateFormated['age'] = age

    return birthDateFormated;
}
