import { X } from "lucide-react";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative bg-white w-full max-w-lg rounded-lg shadow-lg">
                <X onClick={onClose}
                    size={20}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                />
                {children}
            </div>
        </div>
    );
};

export default Modal;
