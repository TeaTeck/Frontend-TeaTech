'use client'

import { LoginHandler, IsLoggedRedirect } from '@/api/login';
import { useState } from "react";
import Image from "next/image";
import Lock from "@/assets/lock.svg";
import Logo from "@/assets/logo.svg";
import User from "@/assets/person.svg";

IsLoggedRedirect()

export default function Login() {
    const [loginError, setLoginError] = useState('');

    async function loginEvent(event) {
        event.preventDefault()
        localStorage.clear()
    
        const formData = event.target;
        const userData = {
            email: formData.elements[0].value,
            password: formData.elements[1].value
        };
    
        const loginCheck = await LoginHandler(userData)
    
        if (loginCheck) {
            window.location.reload()
        } else {
            setLoginError('Erro ao Realizar Login! Verifique sua senha e tente novamente.')
        }
    }

    return (
        <main className=" w-screen h-screen bg-[#3182B0] flex">
            <div className="img-login w-screen h-screen sm:absolute left-[40%] max-sm:blur-sm shadow-lg sm:rounded-3xl"></div>
            <form onSubmit={loginEvent} className="sm:bg-[#f0f0f04a] bg-[#cce2fe4a] rounded-2xl shadow-md w-80 h-[28rem] absolute flex flex-col justify-start items-center top-2/4 right-[68%] max-sm:left-2/4 max-sm:-translate-x-2/4 -translate-y-2/4">
                <Image priority className=" w-80 h-20 mt-8"
                    src={Logo}
                    alt="Logo"
                />
                <div className=" flex w-4/5 p-[10px] rounded-md bg-white mt-12 shadow-md">
                    <Image className=" w-5"
                        src={User}
                        alt="User"
                    />
                    <input type="text" name="login" id="login" placeholder="Usuário" className=" ml-1 pl-1 w-full h-full outline-none" />
                </div>
                <div className=" flex w-4/5 p-[10px] rounded-md bg-white mt-5 shadow-md mb-[3.5rem]">
                    <Image className=" w-5"
                        src={Lock}
                        alt="Lock"
                    />
                    <input type="password" name="pwd" id="pwd" placeholder="Senha" className=" ml-1 pl-1 w-full h-full outline-none" />
                </div>
                <button type="submit" className=" mt-2 mb-2 bg-[#01499C] p-2 text-white font-semibold w-40 rounded-lg shadow-md hover:bg-white hover:text-[#01499C] transition duration-300">ACESSAR</button>
                <span className=" text-red-600 font-bold p-1 rounded-md text-center">{(loginError)}</span>
            </form>
        </main>
    );
}