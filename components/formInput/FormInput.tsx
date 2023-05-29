import { type } from "os";
import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: any;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div className=" p-5">
      <div>
        <label className="block mb-2 text-[1.2rem] font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className=" py-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      </div>
    </div>
  );
};

export default FormInput;
