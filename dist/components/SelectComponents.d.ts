import React from 'react';
interface ISelectComponentsProps {
    name: string;
    label: string;
    onChange?: any;
    defaultValue?: any;
    classAdditional: string;
    data: any[];
}
declare const SelectComponents: React.FC<ISelectComponentsProps>;
export default SelectComponents;
