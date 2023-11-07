import { MenuContext } from "@/context/MenuContext";
import { useContext } from "react";

export function HeaderSteps() {
    const { currentStep } = useContext(MenuContext)

    return(
        <div className="flex flex-col gap-2 border-b-2 border-blue-800 pb-10">
            <header className="text-gray-400 opacity-70"> Step {currentStep}/4</header>
            <strong className="text-3xl"> Verify Your Identity</strong>
            <span className="text-gray-400 opacity-70"> Fill in the parts inside completing the interview`s personal </span>
        </div>
    );
}