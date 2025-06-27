import { RadioButton } from "./RadioButton";

type RadioGroupProps = {
  options: string[];
  groupName: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const radioGroupClasses = "flex w-full flex-wrap";

  return (
    <div className={radioGroupClasses}>
      {props.options.map((option) => (
        <RadioButton
          width="w-1/3"
          name={props.groupName}
          label={option}
          id={option.toLowerCase()}
          value={option.toLowerCase()}
        ></RadioButton>
      ))}
    </div>
  );
};
