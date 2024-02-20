import { FaCopy } from "react-icons/fa";

interface ButtonProps {
  onClick: () => void;
  copied: boolean;
  componentCode: string;
}

const Button = ({ onClick, copied, componentCode }: ButtonProps) => {
  return (
    <button className="copy-button" onClick={onClick}>
      {copied ? (
        "Copié!"
      ) : (
        <>
          <FaCopy /> Copier
        </>
      )}
    </button>
  );
};

export default Button;
