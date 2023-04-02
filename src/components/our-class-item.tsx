import { type ComponentProps } from 'react'
import { type OurClass } from '@/components/our-classes/items'

type Props = { ourClass: OurClass } & ComponentProps<'li'>

export const OurClassItem = (props: Props) => {
  const { image } = props.ourClass

  return (
    <li className="h-auto w-[450px]">
      <img src={image} alt="Our classes" />
    </li>
  )
}
