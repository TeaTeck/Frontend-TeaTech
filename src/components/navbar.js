import "../app/globals.css";
import Image from "next/image";
import Search from "@/assets/search.svg"
import User from "@/assets/person.svg"
import Menu from "@/assets/menu.svg"
import Logo from "@/assets/logo.png"
import Notfication from '@/assets/notifications.svg'

export function Navbar() {
    return (
        <header className=" shadow-lg w-screen h-16">
            <ul className=" flex justify-between items-center w-full h-full ">
                <li className=" flex justify-center items-center w-14 h-14 md:ml-9 ml-2 mr-3">
                    <Image className=" w-full h-full"
                        src={Logo}
                        alt="Logo"
                    />
                </li>
                <li className=" flex p-[6px] md:p-0 md:w-[450px] md:pt-[6px] md:pb-[6px] rounded-xl border border-stone-400">
                    <Image className=" w-5 opacity-60 ml-1"
                        src={Search}
                        alt="Search"
                    />
                    <input type="text" name="" id="" placeholder="" className=" pl-2 w-5/6 h-full outline-none text-[#00000077]" />
                </li>
                <li className=" md:mr-9 flex md:justify-between justify-center items-center w-20 h-8">
                    <Image className=" w-6 max-md:hidden"
                        src={Notfication}
                        alt="Notfication"
                    />
                    <Image className=" w-6 max-md:hidden"
                        src={User}
                        alt="User"
                    />
                    <Image className=" w-8 md:hidden"
                        src={Menu}
                        alt="Menu"
                    />
                </li>
            </ul>
        </header>
    )
}