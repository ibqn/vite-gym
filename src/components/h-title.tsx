import React, { ComponentProps } from 'react'

type Props = ComponentProps<'h1'>

export const HTitle = (props: Props) => {
  const { children } = props
  return (
    <h1 className="font-montserrat text-3xl font-bold uppercase">{children}</h1>
  )
}
