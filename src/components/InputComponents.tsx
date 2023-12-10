import React from 'react';

interface IPropsInput {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

const InputComponents: React.FC<IPropsInput> = (props) => {
  return (
    <>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        { props.label }
      </label>
      <div className="mt-2">
        <input
          type={props.type}
          name={props.name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={props.placeholder ? props.placeholder : ''}
        />
      </div>
    </>
  );
}

export default InputComponents;

