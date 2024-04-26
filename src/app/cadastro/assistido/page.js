'use client'

import { Navbar } from "@/components/navbar"
import { RegisterAssistido } from '@/api/register'

export default function Assistido() {

    /*
    async function onSubmit(event) {
        event.preventDefault();

        const formData = event.target;
        const elements = Array.from(formData.elements);
        const body = {};

        elements.forEach(element => {
            if (!element.value == "") {
                body[element.id] = element.value;
            }
        });

        RegisterAssistido(body)
    }
    */

    return (
        <>
            <Navbar />
            <main className=" mt-5 md:ml-12 self-center justify-self-center w-[95%]">
                
            </main>
        </>
    )
}