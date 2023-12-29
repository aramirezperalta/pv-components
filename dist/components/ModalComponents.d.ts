import React from 'react';
interface sizeProps {
    md: 'sm:max-w-md';
    lg: 'sm:max-w-lg';
    xl: 'sm:max-w-xl';
    full: 'sm:max-w-4xl';
}
interface ModalProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    size: sizeProps;
    children: any;
}
declare const ModalComponents: React.FC<ModalProps>;
export default ModalComponents;
