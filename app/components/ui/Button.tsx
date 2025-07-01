import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
  className?: string;
  variant?: "default" | "secondary"; // <-- dodajemy warianty
};

export const Button = ({
                         children,
                         onClick,
                         type = "button",
                         disabled,
                         href,
                         className = "",
                         variant = "default",
                       }: ButtonProps) => {
  const baseClasses =
      "transition-all duration-300 inline-block rounded-lg border-2 text-xl font-semibold px-6 py-3";

  const variants: Record<string, string> = {
    default:
        "bg-primary text-text border-transparent hover:text-primary hover:bg-bg hover:border-primary disabled:bg-stone-200 disabled:text-stone-600 disabled:border-stone-200",
    secondary:
        "bg-bg text-primary border-primary hover:bg-primary hover:text-bg disabled:border-stone-200 disabled:text-stone-600 disabled:bg-stone-200",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
    );
  }

  return (
      <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={combinedClasses}
      >
        {children}
      </button>
  );
};
