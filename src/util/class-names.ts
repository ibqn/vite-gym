type Classes = (boolean | string)[]

export const classNames = (...classes: Classes): string =>
  classes.filter(Boolean).join(' ')
