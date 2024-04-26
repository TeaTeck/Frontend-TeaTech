'use client'

import { Navbar } from "@/components/navbar"
import { NotLoggedRedirect } from '@/api/login'

export default function Home() {

  //NotLoggedRedirect()

  return (
    <>
      <Navbar />
      <main className=" md:ml-24 mt-8"></main>
    </>
  )
}
