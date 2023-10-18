import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  tittle: string;
  icon?: string;
  variant?: string;
  onClick?: any;
};

const Button = ({ type, tittle, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={tittle} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{tittle}</label>
    </button>
  );
};

export default Button;
