'use client'

import { NotLoggedRedirect } from '@/api/login'
import { Navbar } from "@/components/navbar"

export default function Home() {

  //NotLoggedRedirect()

  return (
    <>
      <Navbar />
      <main className=" md:ml-24 mt-8"></main>
    </>
  )
}
