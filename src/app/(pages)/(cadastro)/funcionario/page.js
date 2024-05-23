'use client'

import React, { useState } from 'react';
import { RegisterFuncionario } from '@/api/register';
import { getCookie } from '@/api/login';
import { formatarCPF } from '@/util/validation';

export default function Funcionario() {
    const [registerInfo, setRegisterInfo] = useState('');

    const registerEvent = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const t = await getCookie()

        formData.set('cpf', formatarCPF(formData.get('cpf')));

        const jsonObject = Object.fromEntries(formData.entries());
        jsonObject['occupationType'] = Number(jsonObject['occupationType'])
        const response = await RegisterFuncionario(jsonObject, t.value);

        if (response === 200) {
            setRegisterInfo('Cadastro Realizado com Sucesso!');
        } else {
            setRegisterInfo('Falha ao Realizar Cadastro!');
        }
    };

    return (
        <main className="mt-5 md:ml-14 flex justify-center items-center w-[95%]">
            <form onSubmit={registerEvent} encType="multipart/form-data" className="w-[90%]">
                <h1 className="text-xl font-bold ml-14 mb-6">Cadastro do Funcionário</h1>
                <div className="w-full flex justify-center items-center mb-6">
                    <div className="w-[98%] border"></div>
                </div>
                <section id="funcionario">
                    <h2 className="text-base font-bold ml-6 mb-4">Informações do Funcionário <span className="text-red-600">*</span></h2>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col w-full mr-5">
                            <label htmlFor="name" className="text-sm font-semibold ml-1">Nome Completo <span className="text-red-600">*</span></label>
                            <input required placeholder="Digite Aqui" type="text" name="name" id="name" className="registerInput" />
                        </div>
                        <div className="flex flex-col w-full mr-5">
                            <label htmlFor="cpf" className="text-sm font-semibold ml-1">CPF <span className="text-red-600">*</span></label>
                            <input required placeholder="Apenas números" maxLength="11" pattern="[0-9]*" type="text" name="cpf" id="cpf" className="registerInput" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="text-sm font-semibold ml-1">Email <span className="text-red-600">*</span></label>
                            <input required placeholder="Exemplo@gmail.com" type="email" name="email" id="email" className="registerInput" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex flex-col w-full mr-5">
                            <label htmlFor="ocupacao" className="text-sm font-semibold ml-1">Ocupação <span className="text-red-600">*</span></label>
                            <div className="flex flex-col ml-1">
                                <div className="flex items-center mb-2">
                                    <input required type="radio" name="occupationType" id="occupationType" value="1" className="mr-2" />
                                    <label htmlFor="coordenacao">Coordenação</label>
                                </div>
                                <div className="flex items-center">
                                    <input required type="radio" name="occupationType" id="occupationType" value="2" className="mr-2" />
                                    <label htmlFor="aplicador">Aplicador</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-full flex justify-center items-center mt-6 mb-6">
                    <div className="w-[98%] border"></div>
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-5 mb-6">
                    <h1 className="text-xl mb-1">{registerInfo}</h1>
                    <button type="submit" className="flex justify-center items-center p-2 border w-[80%] rounded-lg bg-[#3182B0] text-white font-semibold shadow-md hover:shadow-none hover:bg-white hover:text-[#3182B0] transition-all duration-200">
                        SALVAR
                    </button>
                </div>
            </form>
        </main>
    );
}