import ElementWithTitle from "components/core/display/ElementWithTitle";
import Text from "components/core/display/Typography/Text";
import { currencySymbol, installmentMonthCount } from "constants/Product";

export const InstallmentDetails = ({
  installment,
  price,
}: {
  installment?: boolean;
  price: number;
}) => {
  if (installment) {
    return (
      <ElementWithTitle title={"В рассрочку по:"}>
        <Text type="success">
          {`${(price / installmentMonthCount).toFixed(2)} ${currencySymbol}`}
        </Text>
      </ElementWithTitle>
    );
  }
  return null;
};
