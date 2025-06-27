type TextButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const TextButton = (props: TextButtonProps) => {
  const textButtonClasses =
    "transition-all inline-block text-base text-primary hover:text-dark";

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={textButtonClasses}
    >
      {props.children}
    </button>
  );
};
