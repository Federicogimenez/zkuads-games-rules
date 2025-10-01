import type { Language } from "../../context/LanguageContext";
import { useLanguageContext } from "../../hooks/useLanguageContext";

interface SwitcherButtonProps{
    label: string;
    language_option: Language;
}

export default function LangSwitcher() {

    const { lang, setLang }  = useLanguageContext()

    const languages: SwitcherButtonProps[]  = [
        {
            label: "en",
            language_option: "en_US",
        },
        {
            label: "es",
            language_option: "es_ES",
        },
        {
            label: "pt",
            language_option: "pt_BR",
        },
    ]

  return (
    <div className="flex justify-center items-center gap-x-4 rounded-md">
        {
            languages.map(( {language_option, label}, i )=>{
                return <button 
                            key={i}
                            onClick={()=>setLang(language_option)} 
                            className={`outline-none font-killer tracking-wider focus:outline-none uppercase px-2 rounded-sm cursor-pointer transition-all shadow-black duration-200  
                                ${ lang == language_option ? ' text-white bg-orange-secondary shadow-none translate-0.5':' bg-white shadow-box-sm hover:shadow-none hover:translate-0.5 active:translate-1'}`}
                                >
                                {label}
                            </button>
            })
        }
    </div>
  )
}
