type ClassesType = (boolean | string)[]

export const classNames = (...classes: ClassesType): string =>
  classes.filter(Boolean).join(' ')
