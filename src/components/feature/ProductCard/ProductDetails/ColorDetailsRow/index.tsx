import ElementWithTitle from "components/core/display/ElementWithTitle";
import RadioColorPicker from "components/feature/RadioColorPicker";

export const ColorDetailsRow = ({ colors }: { colors: string[] }) => {
  return (
    <ElementWithTitle title={"Цвета:"}>
      <RadioColorPicker colorList={colors} />
    </ElementWithTitle>
  );
};
