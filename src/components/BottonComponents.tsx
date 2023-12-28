import React from 'react';

interface IBottonProps {
    name: string;
    icon: any;
    onClick: any;
    disable?: boolean;
    height?: number;
    width?: number;
}

const BottonComponents: React.FC<IBottonProps> = (props: IBottonProps) =>  {
  return (
    <>
        <button 
            disabled={props.disable} onClick={props.onClick}
            type={"button"}
            className={`inline-flex items-center gap-x-2 rounded-md bg-indigo-600 ${props.height ? `py-${props.height}` : 'py-2.5'} ${props.width ? `px-${props.width}` : 'px-3.5'} text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
            {
               props.icon ?  props.icon : <>
                <svg className="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
               </>
            }
            {
                props.name
            }
        </button>
    </>
  )
}

export default BottonComponents;
