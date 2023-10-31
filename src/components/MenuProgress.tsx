import { User } from "phosphor-react";

export function MenuProgress(){
    return(
        <menu className="mt-8 flex flex-col gap-20">
            <li className="flex items-center gap-6 relative">
                <div className="text-right">
                    <span className="font-bold text-lg">Personal Information</span>
                    <p className="text-gray-400 opacity-70 text-sm">Browse and upload</p>
                </div>
                <div className="p-3 rounded-full bg-blue-400 relative flex justify-center items-start">
                    <User size={24} weight="fill" className="z-10"/>
                    <div className="w-px h-32 bg-blue-400 absolute"> </div>
                </div>
                <div className="w-5 h-5 border-4 border-blue-800 rounded-full flex justify-center items-center absolute -right-2.5">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
            </li>
            <li className="flex items-center gap-6 relative">
                <div className="text-right">
                    <span className="font-bold text-lg">Personal Information</span>
                    <p className="text-gray-400 opacity-70 text-sm">Browse and upload</p>
                </div>
                <div className="p-3 rounded-full bg-blue-400 relative flex justify-center items-center">
                    <User size={24} weight="fill" className="z-10"/>
                    <div className="w-px h-32 bg-blue-400 absolute"></div>
                </div>
                <div className="w-5 h-5 border-4 border-blue-800 rounded-full flex justify-center items-center absolute -right-2.5">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
            </li>
            <li className="flex items-center gap-6 relative">
                <div className="text-right">
                    <span className="font-bold text-lg">Personal Information</span>
                    <p className="text-gray-400 opacity-70 text-sm">Browse and upload</p>
                </div>
                <div className="p-3 rounded-full bg-blue-400 relative flex justify-center items-center">
                    <User size={24} weight="fill" className="z-10"/>
                    <div className="w-px h-32 bg-blue-400 absolute"></div>
                </div>
                <div className="w-5 h-5 border-4 border-blue-800 rounded-full flex justify-center items-center absolute -right-2.5">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
            </li>
            <li className="flex items-center gap-6 relative">
                <div className="text-right">
                    <span className="font-bold text-lg">Personal Information</span>
                    <p className="text-gray-400 opacity-70 text-sm">Browse and upload</p>
                </div>
                <div className="p-3 rounded-full bg-blue-400 relative flex justify-center items-end">
                    <User size={24} weight="fill" className="z-10"/>
                    <div className="w-px h-32 bg-blue-400 absolute"></div>
                </div>
                <div className="w-5 h-5 border-4 border-blue-800 rounded-full flex justify-center items-center absolute -right-2.5">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
            </li>
        </menu>
    )
}