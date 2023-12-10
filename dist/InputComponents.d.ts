import React from 'react';
interface IPropsInput {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
}
declare const InputComponents: React.FC<IPropsInput>;
export default InputComponents;
