import React from 'react';
interface IBottonProps {
    name: string;
    icon: any;
    onClick: any;
    disable?: boolean;
    height?: number;
    width?: number;
}
declare const BottonComponents: React.FC<IBottonProps>;
export default BottonComponents;
