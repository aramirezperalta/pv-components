import React from 'react';

interface ISelectComponentsProps {
    name: string;
    label: string;
    onChange?: any;
    defaultValue?: any;
    classAdditional: string;
    data: any[];
}

 const SelectComponents: React.FC<ISelectComponentsProps> = (props) =>  {
  return (
    <>
        {
           props.label ? <>
            <label htmlFor={props.name} className={"block text-sm font-medium leading-6 text-gray-900"}>
                { props.label }
            </label>
           </> : null
        }
        <select
            name={props.name}
            onChange={props.onChange}
            className={props.classAdditional ? props.classAdditional : 'mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'}
            defaultValue={props.defaultValue}
        >
            {
                props.data.map((item: any) => (
                    <>
                        <option> { item } </option>
                    </>
                ))
            }
        </select>
    </>
  )
}

export default SelectComponents;
