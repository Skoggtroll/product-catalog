import Text from "components/core/display/Typography/Text";
import Space from "components/core/layoutAdapters/Space";
import { currencySymbol } from "constants/Product";

export const PriceDetails = ({
  price,
  oldPrice,
}: {
  price: number;
  oldPrice?: number;
}) => {
  if (oldPrice) {
    return (
      <Space>
        <Text type={"danger"}> {`${price} ${currencySymbol}`}</Text>
        <Text delete disabled>
          {`${oldPrice} ${currencySymbol}`}
        </Text>
      </Space>
    );
  }
  return <Text>{`${price} ${currencySymbol}`}</Text>;
};
