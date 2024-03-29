import { MenuContext } from "@/context/MenuContext";
import { Fingerprint, User, Camera, ListChecks } from "phosphor-react";
import { useContext } from "react";

export function MenuProgress() {
  const steps = ["Personal Information", "ID Verification", "Selfie", "Review"];
  const { currentStep } = useContext(MenuContext);

  return (
    <menu className="mt-8 flex flex-col gap-20 hidden md:flex">
      {steps.map((step, indice) => {
        return (
          <li
            key={indice}
            className="flex justify-end items-center gap-6 relative "
          >
            <div className="text-right">
              <span className="font-bold text-xs md:text-lg">{step}</span>
              <p className="text-gray-400 opacity-70 text-sm">
                Browse and upload
              </p>
            </div>
            <div className={`relative flex justify-center items-start mr-16 `}>
              <div
                className={`p-2 md:p-3 rounded-full bg-gray-600 z-10 duration-200
                ${currentStep === indice + 1 && "active"} 
                ${indice + 1 < currentStep && "complete"}
                `}
              >
                {indice == 0 && (
                  <User size={24} weight="fill" className="z-10" />
                )}
                {indice == 1 && (
                  <Fingerprint size={24} weight="fill" className="z-10" />
                )}
                {indice == 2 && (
                  <Camera size={24} weight="fill" className="z-10" />
                )}
                {indice == 3 && (
                  <ListChecks size={24} weight="fill" className="z-10" />
                )}
                {/* {indice < currentStep && (
                  <Check  size={24} weight="fill" className="z-10" />
                )} */}
              </div>
              {indice === 3 ? (
                <></>
              ) : (
                <div className="w-px h-32 bg-blue-400 absolute"></div>
              )}
            </div>
            <div className="w-5 h-5 border-4 border-blue-800 rounded-full flex justify-center items-center absolute -right-2.5">
              <div
                className={`w-3 h-3 bg-blue-950 rounded-full duration-200 ${
                  indice + 1 < currentStep && "complete"
                }`}
              ></div>
            </div>
          </li>
        );
      })}
    </menu>
  );
}
