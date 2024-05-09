'use client'

import { NotLoggedRedirect } from '@/api/login'
import { Navbar } from "@/components/navbar"

export default function Home() {

  NotLoggedRedirect()
  function logout() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <Navbar />
      <main className=" md:ml-24 mt-8">
        <button onClick={logout}>Logout</button>
      </main>
    </>
  )
}
