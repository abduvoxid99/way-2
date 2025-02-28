export default function numberToPrice(number: number, soum = "сум") {
  return `${number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${soum || null}`;
}
