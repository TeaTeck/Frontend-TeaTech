import Assisted from "@/components/assisted"
import { ProfileNav } from "@/components/profilenav"

export default function Principal() {

    return (
        <>
            <main className=" flex md:ml-12 h-screen">
                <ProfileNav />
                <div className=" w-screen">
                    <Assisted />
                </div>
            </main>
        </>
    )
}