import { MenuProgress } from "@/components/MenuProgress";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto grid grid-cols-3  flex">
      <header className="border-b-2 border-blue-800 py-8 col-span-3">
        <h1 className="text-4xl font-bold"> KYC Verification </h1>
        <span className="text-lg text-gray-400 opacity-70 leading-10">Verify your identity and get started </span>
      </header>

      <div className="border-r-2 border-blue-800 py-8">
        <aside className="min-h-screen">
          <MenuProgress />
        </aside>
        <main
          className="col-span-2"
        >
          
        </main>
      </div>
    </div>
  )
}
