export function formatNumber(num: number) {
  return num.toLocaleString('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
