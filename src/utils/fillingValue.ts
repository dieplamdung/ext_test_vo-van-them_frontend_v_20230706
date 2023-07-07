export function fillingValue(value: any) {
  if (!value) return value;
  return `0${value}`.slice(-2);
}
