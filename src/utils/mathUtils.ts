// modulo bugfix for negative numbers
export function modulo(number: number, divider: number) {
  return ((number % divider) + divider) % divider;
}
