import React from 'react';

interface IPropsInput {
    name?: string;
    label?: string;
    onChange?: any;
    placeholder?: string;
    type?: string;
    classAdditional?: string;
    value?: any;
    error?: string;
    classLabel?: string;
    requiredFiels?: boolean;
    autoCompleteInput?: boolean;
    disable?: boolean;
    max?: number;
    id?: string;
    icon?: Element | any;
}

const InputComponents: React.FC<IPropsInput> = (props) => {
  return (
    <>
      {
        props.icon ?
        <div className={'grid grid-cols-12 gap-4'}>
            <div className={'col-span-1'}>
                {
                    props.icon
                }
            </div>
            <div className={'col-span-10'}>
                <label htmlFor={props.name} className={props.classLabel}>&nbsp; {props.label} </label>
            </div>
        </div> : props.label ? <label htmlFor={props.name} className={props.classLabel}>&nbsp; {props.label} </label> : null
      }
      <div className="mt-2">
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          className={props.classAdditional ? props.classAdditional : 'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'}
          placeholder={props.placeholder}
          onChange={props.onChange}
          defaultValue={props.value}
          required={props.requiredFiels}
          autoComplete={props.autoCompleteInput === true ? 'on' : 'off'}
          disabled={props.disable}
          min={0}
          maxLength={props.max}
        />
      </div>
    </>
  );
}

export default InputComponents;

