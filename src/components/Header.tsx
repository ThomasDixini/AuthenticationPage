import Image from "next/image";

export function Header() {
    return (
        <header className="w-full px-28 py-4 justify-center border-b-2 border-blue-800">
            <div className="max-w-7xl flex justify-between mx-auto items-center">
                <Image width={100} height={100} alt="" src=""/>
                <button className="h-12 px-8 rounded font-bold bg-blue-600 flex items-center hover:bg-blue-900 duration-200">
                    Contate-nos
                </button>
            </div>
        </header>
    )
}