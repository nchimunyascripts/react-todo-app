import { ReactNode } from "react";

type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => Promise<void>;
};

const Button = ({ onClick, buttonType, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
