import React from 'react';

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (<>
      <div className={'block text-sm font-medium leading-6 bg-blue-500 p-20'}>
        {message}
      </div>
    </>);
};

export default Alert;
