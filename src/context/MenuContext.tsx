import { ReactNode, createContext, useState } from "react";

interface MenuContextProviderProps {
    children: ReactNode
}

interface MenuContextData {
    currentStep: number
    handleAddCurrentStep: () => void
    handleDecrementCurrentStep: () => void
}

export const MenuContext = createContext({} as MenuContextData)

export function MenuContextProvider({children}: MenuContextProviderProps){
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    function handleAddCurrentStep() {
        if(currentStep <= 4){
            setCurrentStep(state => state += 1)
        }
    }

    function handleDecrementCurrentStep() {
        if(currentStep > 1){
            setCurrentStep(state => state -= 1)
        }
    }

    return(
        <MenuContext.Provider value={{
            currentStep, 
            handleAddCurrentStep,
            handleDecrementCurrentStep
        }}>
            {children}
        </MenuContext.Provider>
    );
}