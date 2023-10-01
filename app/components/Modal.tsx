import {ReactNode} from "react";
import {notFound} from "next/navigation";

interface Props {
  children: ReactNode;
  onClose: () => void;
  id: number;
}

interface Contact {
  id: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  userWebsite: string;
  userCompanyName: string;
}

const Modal = async ({children, onClose}: Props) => {
  // if (!id) notFound();

  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {/* <h1>{id}</h1> */}
      {children}
      <button
        type="button"
        className="btn btn-outline"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Modal;
