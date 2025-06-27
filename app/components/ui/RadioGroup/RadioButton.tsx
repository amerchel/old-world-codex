type RadioButtonProps = {
  width: "w-1/2" | "w-1/3" | "w-1/4" | "w-1/5";
  name: string;
  id: string;
  value: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export const RadioButton = (props: RadioButtonProps) => {
  const divClasses = [props.width, "flex justify-center p-2"].join(" ");
  const labelClasses =
    "relative inline-block w-full rounded-lg border-2 border-transparent bg-primary px-6 py-3 text-center text-xl font-semibold text-text transition-all duration-300 hover:cursor-pointer hover:border-primary hover:bg-bg hover:text-primary disabled:border-stone-200 disabled:bg-stone-200 disabled:text-stone-600 has-[:checked]:cursor-default has-[:checked]:border-primary has-[:checked]:bg-bg has-[:checked]:text-primary";
  const radioButtonClasses = "peer hidden";
  const markerClasses =
    "absolute bottom-0 right-0 h-2 w-2 opacity-0 -translate-x-1 -translate-y-1 rounded-full bg-primary peer-checked:opacity-100 transition-all duration-300";

  return (
    <div className={divClasses}>
      <label htmlFor={props.id} className={labelClasses}>
        <p>{props.label}</p>
        <input
          type="radio"
          id={props.id}
          name={props.name}
          required={props.required}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          className={radioButtonClasses}
        />
        <div className={markerClasses}></div>
      </label>
    </div>
  );
};
