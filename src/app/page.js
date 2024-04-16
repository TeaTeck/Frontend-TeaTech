'use client'

import { Navbar } from "@/components/navbar"
import { NotLoggedRedirect } from '@/api/redirect'

export default function Home() {

  NotLoggedRedirect()
  
  function deslogar() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <Navbar />
      <div className=" md:ml-24 mt-8">
        <button className=" border border-black p-5 rounded-md" onClick={deslogar}>
          Deslogar
        </button>
      </div>
    </>
  )
}
