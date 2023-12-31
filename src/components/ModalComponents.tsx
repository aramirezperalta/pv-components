import React from 'react';

interface sizeProps {
    'md': 'sm:max-w-md',
    'lg': 'sm:max-w-lg',
    'xl': 'sm:max-w-xl',
    'full': 'sm:max-w-4xl',
}

interface ModalProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    size?: sizeProps;
    children: any;
}

const ModalComponents: React.FC<ModalProps> = (props: ModalProps) => {

    return (
        <>
            {
                props.isOpen ?
                    <>
                        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <div
                                    className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-lg font-semibold">{props.title}</h2>
                                    <button
                                        type="button"
                                        onClick={props.onClose}
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="sr-only">Close</span>
                                        <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    </div>
                                    <hr />
                                    <div>
                                        {props.children}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </> : null
            }
        </>
    );
};

export default ModalComponents;
