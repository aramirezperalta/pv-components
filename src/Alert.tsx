import React from 'react';

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (<><div>{message}</div></>);
};

export default Alert;
