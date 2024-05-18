'use client'

import "../app/globals.css";
import { NotLoggedRedirect } from '@/api/login'
import Image from "next/image";
import Menu from "@/assets/menu.svg"
import Home from "@/assets/home.svg"
import Summary from "@/assets/sumary.svg"
import Sheet from "@/assets/sheet.svg"
import Logo from "@/assets/logo.png"
import Profile from "@/assets/profile.svg"
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import Link from "next/link";

export function Navbar() {
    NotLoggedRedirect()
    const token = localStorage.getItem('session')
    const decoded = jwtDecode(token);
    const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    const [colapse, setColapse] = useState(true);
    const [showLogout, setShowLogout] = useState('hidden')

    function showLogoutHandler() {
        if (showLogout == 'hidden') {
            setShowLogout('fixed')
        } else {
            setShowLogout('hidden')
        }
    }

    function logout() {
        localStorage.clear()
        window.location.reload()
    }

    const toggleSidebar = () => {
        if (colapse == true) {
            document.getElementById("sidebar").style.transform = "translateX(0%)"
        } else {
            document.getElementById("sidebar").style.transform = "translateX(-100%)"
        }

        setColapse(!colapse);
    }

    return (
        <>
            <header className=" max-md:fixed sticky max-md:top-0 z-10 shadow-lg w-screen h-16 bg-white">
                <ul className=" flex justify-between items-center w-full h-full ">
                    <li className=" flex justify-center items-center w-14 h-14 md:ml-9 ml-2 mr-3">
                        <Image priority className=" w-full h-full"
                            src={Logo}
                            alt="Logo"
                        />
                    </li>
                    <li className=" flex justify-center items-center w-14 h-14 mr-20">
                        <button onClick={showLogoutHandler} className=" text-[#3182B0] font-semibold hover:drop-shadow-lg drop-shadow-[#3182B0]">
                            Desconectar
                        </button>
                    </li>
                    <li className=" md:mr-9 md:hidden flex md:justify-between justify-center items-center w-20 h-8">
                        <button type="button" onClick={toggleSidebar}>
                            <Image className=" w-8"
                                src={Menu}
                                alt="Menu"
                            />
                        </button>
                    </li>
                </ul>
            </header>
            <aside className={` ${role == 'Responsible' ? 'hidden' : 'fixed'} h-screen w-12 top-0 z-0 bg-[#3182B0] flex justify-center items-start max-md:-translate-x-full transition duration-300`} id="sidebar">
                <ul className=" mt-16 flex flex-col justify-between items-center w-full h-[88%]">
                    <li className=" mt-5">
                        <ul className=" flex flex-col justify-evenly items-center w-full">
                            <li className="sidemenu">
                                <Link href="/">
                                    <Image className=" w-6"
                                        src={Home}
                                        alt="Home"
                                    />
                                </Link>
                            </li>
                            <li className="sidemenu">
                                <Link href="/assistido">
                                    <Image className=" w-6"
                                        src={Sheet}
                                        alt="Sheet"
                                    />
                                </Link>
                            </li>
                            <li className="sidemenu">
                                <Link href="/funcionario">
                                    <Image className=" w-6"
                                        src={Profile}
                                        alt="Profile"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <section className={` ${showLogout} w-screen h-screen bg-[#00000086] flex justify-center items-center top-0 z-10`}>
                <div className=" w-80 border shadow-lg rounded-lg p-4 bg-white">
                    <label className=" font-semibold">Tem certeza que quer desconectar?</label>
                    <div className=" flex mt-5">
                        <button onClick={logout} className=" border px-6 py-2 mr-5 rounded-lg text-white bg-[#3182B0] hover:bg-white hover:text-[#3182B0] transition duration-150">Sim, desconectar</button>
                        <button onClick={showLogoutHandler} className=" text-[#3182B0]">Cancelar</button>
                    </div>
                </div>
            </section>
        </>
    )
}