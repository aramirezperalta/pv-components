import React from 'react';

interface ITextareaComponentsProps {
    name: string;
    rows: number;
    label: string;
    onChange?: any;
    defaultValue?: any;
    classAdditional: string;
}

 const TextareaComponents: React.FC<ITextareaComponentsProps> = (props) =>  {
  return (
    <>
        <div className="sm:col-span-2">
            {
            props.label ? <>
                <label htmlFor={props.name} className={"block text-sm font-medium leading-6 text-gray-900"}>
                    { props.label }
                </label>
            </> : null
            }
            
            <div className="mt-2.5">
                <textarea 
                    name={props.name}
                    defaultValue={props.defaultValue}
                    rows={props.rows}
                    onChange={props.onChange}
                    className={props.classAdditional ? props.classAdditional : "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}>
                </textarea>
            </div>
      </div>
    </>
  )
}

export default TextareaComponents;
