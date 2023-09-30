import React, {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

const Toast = ({children}: Props) => {
  return (
    <div className="toast toast-start">
      <div className="alert alert-success">
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Toast;
