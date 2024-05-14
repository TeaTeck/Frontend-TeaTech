'use client'

import "../app/globals.css";
import Image from "next/image";
import Menu from "@/assets/menu.svg"
import Home from "@/assets/home.svg"
import Status from "@/assets/status.svg"
import Calendar from "@/assets/calendar.svg"
import Config from "@/assets/config.svg"
import Summary from "@/assets/sumary.svg"
import Sheet from "@/assets/sheet.svg"
import Logo from "@/assets/logo.png"
import Profile from "@/assets/profile.svg"
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import Link from "next/link";

export function Navbar() {
    const token = localStorage.getItem('session')
    const decoded = jwtDecode(token);
    const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    const [colapse, setColapse] = useState(true);

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
                    <li className=" md:mr-9 flex md:justify-between justify-center items-center w-20 h-8">
                        <button type="button" onClick={toggleSidebar}>
                            <Image className=" w-8 md:hidden"
                                src={Menu}
                                alt="Menu"
                            />
                        </button>
                    </li>
                </ul>
            </header>
            <aside className={` ${role == 'Responsible'? 'hidden' : 'fixed'} h-screen w-12 top-0 z-0 bg-[#3182B0] flex justify-center items-start max-md:-translate-x-full transition duration-300`} id="sidebar">
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
                                        src={Summary}
                                        alt="Summary"
                                    />
                                </Link>
                            </li>
                            <li className="sidemenu">
                                <Link href="/listagem/1">
                                    <Image className=" w-6"
                                        src={Sheet}
                                        alt="Sheet"
                                    />
                                </Link>
                            </li>
                            <li className="sidemenu">
                                <button type="button">
                                    <Image className=" w-6"
                                        src={Calendar}
                                        alt="Calendar"
                                    />
                                </button>
                            </li>
                            <li className="sidemenu">
                                <button type="button">
                                    <Image className=" w-6"
                                        src={Status}
                                        alt="Status"
                                    />
                                </button>
                            </li>
                            <li className="sidemenu">
                                <button type="button">
                                    <Image className=" w-6"
                                        src={Profile}
                                        alt="Profile"
                                    />
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className=" mb-5">
                        <button type="button">
                            <Image className=" w-6"
                                src={Config}
                                alt="Config"
                            />
                        </button>
                    </li>
                </ul>
            </aside>
        </>
    )
}