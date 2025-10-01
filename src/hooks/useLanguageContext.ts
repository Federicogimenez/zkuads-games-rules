import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";


export function useLanguageContext(){
    
    const context = useContext(LanguageContext)
    
    if (context === undefined) {
        throw new Error('useAllyContext must be used within an AllyProvider');
    }
    return context;
}