import Image from "next/image";
import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";

interface ReviewStepProps {
  image: string;
  register: UseFormRegister<FieldValues>;
}

export function ReviewStep({ image, register }: ReviewStepProps) {
  return (
    <div className="p-8 bg-gray-800 rounded-lg my-8 flex flex-col items-center">
      <strong className="text-2xl"> Information Review </strong>
      <div className="mt-16 flex flex-col gap-4 justify-center items-center">
        <Image
          src={image}
          width={96}
          height={96}
          alt="Imagem de Perfil"
          className="rounded-full object-cover h-24 w-24 outline outline-offset-4 outline-blue-400"
        />

        <span className="font-bold text-xl"> Well Jonathan </span>
      </div>
      <table className="w-full  mt-4">
        <tr className="border-dashed border-b-2 border-gray-600 border-separate">
          <td className="border-separate py-3"> Email Adress </td>
          <td className="border-separate py-3 text-right">
            {" "}
            jonaviar@email.com.us{" "}
          </td>
        </tr>
        <tr className="border-dashed border-b-2 border-gray-600 border-separate">
          <td className="border-separate py-3"> Location </td>
          <td className="border-separate py-3 text-right"> United States </td>
        </tr>
        <tr className="border-dashed border-b-2 border-gray-600 border-separate">
          <td className="border-separate py-3"> Date of Birth </td>
          <td className="border-separate py-3 text-right"> Thomás Dixini </td>
        </tr>
        <tr className="border-separate">
          <td className="border-separate py-3"> First Name </td>
          <td className="border-separate py-3 text-right"> Thomás Dixini </td>
        </tr>
      </table>
    </div>
  );
}
