import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import cn from "../../utils/cn";

import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containrRef = useRef<HTMLDivElement>(null);

  const handleOutsiteClose = (e: MouseEvent) => {
    if (!containrRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        onClick={handleOutsiteClose}
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/60 invisible",
          {
            visible: isOpen,
          }
        )}
      >
        <div
          ref={containrRef}
          className="bg-white w-full max-w-sm rounded-md p-5 text-center"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;

  return (
    <button className="ml-auto" onClick={onClose}>
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-5 h-5 bg-red-500 rounded-md p-0.5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex w-full justify-between items-center mb-3">
      {children}
    </div>
  );
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;

export default Modal;
