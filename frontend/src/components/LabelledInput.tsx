import { ChangeEvent } from "react";

interface LabelledInputProps {
   label:string;
   type?:string
   placeholder:string;
   onChange: (e:ChangeEvent<HTMLInputElement>)=> void
}


export default function LabelledInput({label,type,placeholder,onChange}:LabelledInputProps){
   return (
      
      <div>
         <div className="">
            <label className="block text-sm font-semibold text-gray-900 pt-4 mb-2">{label}</label>
            <input onChange={onChange} type= {  type? type: "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " placeholder={placeholder} required />
        </div>
      </div>
   )
}