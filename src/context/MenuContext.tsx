import { ReactNode, createContext, useState } from "react";

interface MenuContextProviderProps {
    children: ReactNode
}

interface MenuContextData {
    currentStep: number
    handleAddCurrentStep: () => void
}

export const MenuContext = createContext({} as MenuContextData)

export function MenuContextProvider({children}: MenuContextProviderProps){
    const [currentStep, setCurrentStep] = useState(2);
    const [complete, setComplete] = useState(false);

    function handleAddCurrentStep() {
        setCurrentStep(state => state += 1)
    }

    return(
        <MenuContext.Provider value={{
            currentStep, 
            handleAddCurrentStep
        }}>
            {children}
        </MenuContext.Provider>
    );
}