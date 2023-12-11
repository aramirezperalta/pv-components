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
declare const InputComponents: React.FC<IPropsInput>;
export default InputComponents;
