import { ChangeEvent } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

type RadioButtonGroupProps = {
  list: Array<string>;
  name: string;
  selected: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  return (
    <ToggleButtonGroup name={props.name} type="radio" className="d-inline">
      {props.list.map((value) => (
        <ToggleButton
          id={`${props.name}-${value}`}
          key={`${props.name}-${value}`}
          value={value}
          onChange={props.onChange}
          variant={value === props.selected ? "primary" : "outline-secondary"}
        >
          {value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default RadioButtonGroup;
