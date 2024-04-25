import { Navbar } from "@/components/navbar"
import { ProfileNav } from "@/components/profilenav"


export default function Programas() {

    return (
        <>
            <Navbar />
            <main className=" flex md:ml-12">
                <ProfileNav/>
                
            </main>
        </>
    )
}