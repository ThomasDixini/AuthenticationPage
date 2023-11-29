import Image from "next/image";
import { Check, FileImage } from "phosphor-react";
import { useRef, useState, useEffect } from "react";

export function ImageSelect() {
    const [image, setImage] = useState('')
    const uploaderRef = useRef<HTMLInputElement>(document.createElement('input'));

    function handleImageChange() {
        if(uploaderRef.current.files){
            setImage(URL.createObjectURL(uploaderRef.current.files[0]))
            console.log(uploaderRef.current.files[0], image)
        }
    }

    return (
        <>
            {
                !image && 
                <div className="w-full bg-blue-900 mt-8 rounded-md p-8 flex flex-col items-center gap-10">
                    <label 
                        htmlFor="file-uploader" 
                        className="bg-blue-950 cursor-pointer inline-block w-full 
                        border-dashed border-blue-400 border-2 flex justify-center items-center
                        p-8"
                    >
                        <FileImage size={300} weight="fill" />
                        <input ref={uploaderRef} id="file-uploader" type="file" className="hidden w-full" onChange={handleImageChange}/>
                    </label>
                    <button className="px-8 py-4 border-2 border-blue-400 rounded-md">
                        Fazer upload de foto
                    </button>
                </div>
            }
            {
                image && 
                <div className="w-full bg-blue-900 mt-8 rounded-md p-8 flex flex-col items-center gap-6">
                    <div className="rounded-full p-1 border-2 border-blue-400 object-cover ">
                        <Image src={image} width={96} height={96} alt="Imagem de Perfil" className="rounded-full object-cover h-24 w-24"/>
                    </div>
                    <span className="border-2 border-blue-400 py-2 px-4 rounded-full font-bold flex gap-2 items-center">Imagem Selecionada {<Check size={24} weight="bold"/>} </span>
                </div>
            }
        </>
    )
}