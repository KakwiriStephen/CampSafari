import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  tittle: string;
  icon?: string;
  variant?: string;
  onClick?: any;
  full?: boolean;
};

const Button = ({ type, tittle, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={tittle} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {tittle}
      </label>
    </button>
  );
};

export default Button;
