'use client'

import "../app/globals.css";
import Image from "next/image";
import Search from "@/assets/search.svg"
import User from "@/assets/person.svg"
import Menu from "@/assets/menu.svg"
import Home from "@/assets/home.svg"
import Status from "@/assets/status.svg"
import Calendar from "@/assets/calendar.svg"
import Config from "@/assets/config.svg"
import Sumary from "@/assets/sumary.svg"
import Sheet from "@/assets/sheet.svg"
import Logo from "@/assets/logo.png"
import Profile from "@/assets/profile.svg"
import Notfication from '@/assets/notifications.svg'
import { useState } from 'react';

export function Navbar() {
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
        <main>
            <header className=" shadow-lg w-screen h-16">
                <ul className=" flex justify-between items-center w-full h-full ">
                    <li className=" flex justify-center items-center w-14 h-14 md:ml-9 ml-2 mr-3">
                        <Image priority className=" w-full h-full"
                            src={Logo}
                            alt="Logo"
                        />
                    </li>
                    <li className=" flex p-[6px] md:p-0 md:w-[450px] md:pt-[6px] md:pb-[6px] rounded-xl border border-stone-400">
                        <Image className=" w-6 opacity-60 ml-1"
                            src={Search}
                            alt="Search"
                        />
                        <input type="text" name="" id="" placeholder="" className=" pl-2 w-6/6 h-full outline-none text-[#00000077]" />
                    </li>
                    <li className=" md:mr-9 flex md:justify-between justify-center items-center w-20 h-8">
                        <button type="button">
                            <Image className=" w-6 max-md:hidden"
                                src={Notfication}
                                alt="Notfication"
                            />
                        </button>
                        <button type="button">
                            <Image className=" w-6 max-md:hidden"
                                src={User}
                                alt="User"
                            />
                        </button>
                        <button type="button" onClick={toggleSidebar}>
                            <Image className=" w-8 md:hidden"
                                src={Menu}
                                alt="Menu"
                            />
                        </button>
                    </li>
                </ul>
            </header>
            <aside className=" fixed h-screen w-12 bg-[#3182B0] flex justify-center items-start max-md:-translate-x-full transition duration-300" id="sidebar">
                <ul className=" flex flex-col justify-between items-center w-full h-[88%]">
                    <li className=" mt-5">
                        <ul className=" flex flex-col justify-evenly items-center w-full">
                            <li className="sidemenu">
                                <button type="button">
                                    <Image className=" w-6"
                                        src={Home}
                                        alt="Home"
                                    />
                                </button>
                            </li>
                            <li className="sidemenu">
                                <button type="button">
                                    <Image className=" w-6"
                                        src={Sumary}
                                        alt="Sumary"
                                    />
                                </button>
                            </li>
                            <li className="sidemenu">
                                <button type="button">
                                    <Image className=" w-6"
                                        src={Sheet}
                                        alt="Sheet"
                                    />
                                </button>
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
                    <li>
                        <button type="button">
                            <Image className=" w-6"
                                src={Config}
                                alt="Config"
                            />
                        </button>
                    </li>
                </ul>
            </aside>
        </main>
    )
}