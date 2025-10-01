import { Link } from 'react-router-dom'
import LangSwitcher from '../components/LangSwitcher'

export default function Header() {
  return (
    <header className="h-[10%] relative w-full flex items-center justify-around py-[5dvh] ">
        <Link to={"/"} className="w-auto h-full">
            <img src="/header_logo.png" alt="banner" className="w-full  " />
        </Link>
        <LangSwitcher />
    </header>
  )
}
