export const getPxValue = (value?: number) => (value || value === 0 ? `${value}px` : "");

export const getResulutionValue = (value?: number, breakpoint?: number) =>
  value || value === 0 ? getPxValue(value) : getPxValue(breakpoint);
