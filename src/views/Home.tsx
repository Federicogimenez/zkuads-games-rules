import { useLanguageContext } from "../hooks/useLanguageContext";
import Dashboard from "../shared/layout/Dashboard";
import Header from "../shared/layout/Header";

export default function Home() {

    const { t } = useLanguageContext()
  
  return (
    <main className="relative w-full h-full min-h-dvh flex flex-col items-center">
        <div className="fixed inset-0 bg-gradient-to-b from-gray-secondary to-gray-primary" />
        {/* <img src="/zkuads_bg.png" alt="bg" className="fixed inset-0 w-full h-full object-cover object-center brightness-200" /> */}

        <Header />

        <h1 className=" relative  text-white text-center mb-20">
          { t.base.games_rules }
        </h1>

        <div className="relative w-11/12 lg:max-w-4xl pb-20 ">
          <Dashboard />
        </div>
    </main>
  )
}
