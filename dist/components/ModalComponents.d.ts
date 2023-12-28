import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode | React.ReactElement;
}
declare const ModalComponents: React.FC<ModalProps>;
export default ModalComponents;
