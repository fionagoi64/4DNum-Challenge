export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("ms-MY", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
