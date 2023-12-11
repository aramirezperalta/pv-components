import React from 'react';
interface ITextareaComponentsProps {
    name: string;
    rows: number;
    label: string;
    onChange?: any;
    defaultValue?: any;
    classAdditional: string;
}
declare const TextareaComponents: React.FC<ITextareaComponentsProps>;
export default TextareaComponents;
