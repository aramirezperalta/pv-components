import React, { ReactNode } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
declare const ModalComponents: React.FC<ModalProps>;
export default ModalComponents;
