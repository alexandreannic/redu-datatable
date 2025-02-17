export const range = (min: number, max: number) => (value: number) => {
  if (value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}
