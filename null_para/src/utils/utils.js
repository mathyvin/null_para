export function toDoubleDecimal(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
