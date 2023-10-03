import React, {ReactNode} from "react";

interface Props {
  status: any;
}

const Toast = ({status}: Props) => {
  return (
    <>
      {status && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            {status === 200 && (
              <div className="toast toast-end">
                <div className="alert alert-success">
                  <span>Contact Updated.</span>
                </div>
              </div>
            )}
            {status === 400 && (
              <div className="toast toast-end">
                <div className="alert alert-error">
                  <span>Contact already exist.</span>
                </div>
              </div>
            )}
            {status === 500 && (
              <div className="toast toast-end">
                <div className="alert alert-error">
                  <span>Contact already exist.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
