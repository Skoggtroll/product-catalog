import { useState } from "react";
import Flex from "../../core/layouts/Flex";
import "./index.scss";
import { ColorSquare } from "./ColorSquare";

export interface RadioColorPickerProps {
  colorList: string[];
  defaultValue?: string;
  onChange?: (color: string) => void;
}

const RadioColorPicker = (props: RadioColorPickerProps) => {
  const { colorList, defaultValue, onChange } = props;
  const [value, setValue] = useState(defaultValue);

  const handleChangeValue = (color: string) => {
    setValue(color);
    onChange && onChange(color);
  };

  return (
    <Flex gap={2} className="radio_color_picker_container" align="center">
      {colorList.map((color) => (
        <ColorSquare
          key={color}
          onClick={() => handleChangeValue(color)}
          active={value === color}
          color={color}
        />
      ))}
    </Flex>
  );
};

export default RadioColorPicker;
