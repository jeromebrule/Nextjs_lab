import {ReactNode} from "react";
import UserForm from "./UserForm";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn btn-neutral"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Modal;
