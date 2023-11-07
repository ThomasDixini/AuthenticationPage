import { HeaderSteps } from "@/components/HeaderSteps";
import { MenuProgress } from "@/components/MenuProgress";
import { ValidationFields } from "@/components/ValidationFields";
import { MenuContext } from "@/context/MenuContext";
import { useContext } from "react";

export default function Home() {
  const { handleIncrementCurrentStep, handleDecrementCurrentStep } = useContext(MenuContext)

  return (
    <div className="max-w-7xl m-auto grid grid-cols-3 flex">
      <header className="border-b-2 border-blue-800 py-8 col-span-3">
        <h1 className="text-4xl font-bold"> KYC Verification </h1>
        <span className="text-lg text-gray-400 opacity-70 leading-10">Verify your identity and get started </span>
      </header>

      <div className="pt-8 col-span-3 flex gap-10">
        <aside className="min-h-screen border-r-2 border-blue-800">
          <MenuProgress />
        </aside>
        <main
          className="p-8 flex-1"
        >
          <HeaderSteps />
          <ValidationFields />
          <div className="mt-8 flex justify-end">
            <button className="px-12 h-14 font-bold hover:brightness-50 duration-200" onClick={handleDecrementCurrentStep}> Back </button>
            <button className="px-12 h-14 bg-blue-600 rounded-lg font-bold hover:bg-blue-900 duration-200" onClick={handleIncrementCurrentStep}> Next </button>
          </div>
        </main>
      </div>
    </div>
  )
}
