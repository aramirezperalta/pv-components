import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: any;
}
declare const ModalComponents: React.FC<ModalProps>;
export default ModalComponents;
