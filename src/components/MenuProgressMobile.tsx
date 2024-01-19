import { ArrowLeft, ArrowRight, User } from "phosphor-react";

export function MenuProgressMobile() {
  return (
    <footer className="w-full h-48 bg-blue-800 bg-gradient-to-t from-blue-800 fixed bottom-0 left-0 right-0 flex justify-around items-center md:hidden">
      <ArrowLeft size={40} weight="fill" className="z-10" />
      <div className="text-right flex flex-col items-center -mt-24">
        <div className="p-4 md:p-3 rounded-full bg-gray-600 z-10 duration-200 mb-4">
          <User size={24} weight="fill" className="z-10" />
        </div>
        <span className="font-bold text-5xl ">User</span>
        <p className="text-gray-400 opacity-70 text-lg">Browse and upload</p>
      </div>
      <ArrowRight size={40} weight="fill" className="z-10" />
    </footer>
  );
}
