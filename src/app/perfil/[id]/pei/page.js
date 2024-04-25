import { Navbar } from "@/components/navbar"
import { ProfileNav } from "@/components/profilenav"


export default function Pei() {

    return (
        <>
            <Navbar />
            <main className=" flex md:ml-12">
                <ProfileNav/>
                
            </main>
        </>
    )
}