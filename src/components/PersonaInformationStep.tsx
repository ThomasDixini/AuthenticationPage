import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

interface PersonalInformationStepProps {
  register: UseFormRegister<FieldValues>;
}

export function PersonaInformationStep({
  register,
}: PersonalInformationStepProps) {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <input
        type="text"
        className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200"
        placeholder="First Name"
        required
        {...register("firstname")}
      />
      <input
        type="text"
        className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200"
        placeholder="Last Name"
        required
        {...register("lastname")}
      />
      <input
        type="date"
        className="bg-transparent border-2 border-gray-600 rounded-md p-4 outline-0 focus:border-2 focus:border-blue-400 duration-200"
        placeholder="Birthday"
        required
        {...register("birthday")}
      />
    </div>
  );
}
