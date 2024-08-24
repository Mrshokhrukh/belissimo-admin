interface Props {
  price: number;
}

const FormatPrice = ({ price }: Props) => {
  if (!(price > 999)) {
    return price;
  }

  return (
    <>
      {price > 999 && price < 999999
        ? Math.floor(price / 1000) + "," + String(price).slice(-3)
        : Math.floor(price / 1000000) +
          "," +
          ((price / 1000) % 1000) +
          "," +
          String(price).slice(-3)}
    </>
  );
};

export default FormatPrice;
