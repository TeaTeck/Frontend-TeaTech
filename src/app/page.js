import { Navbar } from "@/components/navbar"
import { hasCookie } from 'cookies-next';
import { redirect } from 'next/navigation'

export default function Home() {
  (function () {
    if (hasCookie('login') === false) {
      redirect(`login`)
    }
  })();

  return (
    <>
      <Navbar />
      <div className=" md:ml-24 mt-8">

      </div>
    </>
  )
}
