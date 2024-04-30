import { Navbar } from "@/components/navbar"

export default function RootLayout({ children }) {
  return (
      <body>
        <Navbar/>
        {children}
      </body>
  );
}
