import React from 'react';
import './../styles.css';
interface IPropsInput {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
}
declare const InputComponents: React.FC<IPropsInput>;
export default InputComponents;
