import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: any;
}

const ModalComponents: React.FC<ModalProps> = (props: ModalProps) => {
    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden'; // Evita que el fondo de la página se desplace cuando el modal está abierto
        } else {
            document.body.style.overflow = 'unset'; // Restaura el comportamiento de desplazamiento normal
        }

        return () => {
            document.body.style.overflow = 'unset'; // Asegura que el comportamiento de desplazamiento se restablezca cuando el componente se desmonta
        };
    }, [props.isOpen]);

    return (
        <>
            <div
            className={`fixed inset-0 flex p-2 items-start justify-center z-50 ${
                props.isOpen ? 'block' : 'hidden'
            }`}
            >
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={props.onClose}
                />
                <div className="bg-white rounded-lg p-1 z-50 overflow-auto">
                    <div className={'flex justify-end pb-4'}>
                        <button
                            className="hover:bg-gray-100 flex py-1 px-1 rounded"
                            onClick={props.onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default ModalComponents;
