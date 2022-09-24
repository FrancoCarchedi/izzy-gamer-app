const formatNumber = (number) => {
  return new Intl.NumberFormat("ar-AR", {
    style: "currency",
    currency: 'ARG',
  }).format(number)
}

export default formatNumber