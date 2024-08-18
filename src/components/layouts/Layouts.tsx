import { ReactNode } from "react"
import { Footer } from "../footer/Footer"
import Home from "../home/Home"


interface Props{
    children:ReactNode
}
const Layouts = ({children}:Props) => {
  return (
    <>
    <Home/>
    {children}
    <Footer/>
    </>
  )
}

export default Layouts