import { ChangeEvent } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

type CheckboxButtonGroupProps = {
  list: Array<string>;
  name: string;
  selected: Array<string>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxButtonGroup = (props: CheckboxButtonGroupProps) => {
  return (
    <ToggleButtonGroup name={props.name} type="checkbox" className="d-inline">
      {props.list.map((value) => (
        <ToggleButton
          type="checkbox"
          id={`${props.name}-${value}`}
          key={`${props.name}-${value}`}
          value={value}
          onChange={props.onChange}
          variant={
            props.selected.includes(value) ? "primary" : "outline-secondary"
          }
        >
          {value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CheckboxButtonGroup;
