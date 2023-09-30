import React, {ReactNode} from "react";

interface Props {
  children: ReactNode;
  show: boolean;
}

const Modal = ({children, show}: Props) => {
  const content = show && (
    <div className="modal modal-bottom sm:modal-middle modal-open">
      {/* we want any content for this modal layout so we just pass the children */}
      <div className="modal-box">{children}</div>
    </div>
  );
  return content;
};

export default Modal;
