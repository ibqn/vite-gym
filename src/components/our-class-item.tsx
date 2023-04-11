import { type ComponentProps } from 'react'
import { type OurClass } from '@/components/our-classes/items'
import { classNames } from '@/util/class-names'

type Props = { ourClass: OurClass } & ComponentProps<'li'>

export const OurClassItem = ({ ourClass }: Props) => {
  const { image, name, description } = ourClass

  return (
    <div className="relative h-auto w-[450px]">
      <div
        className={classNames(
          'absolute z-10 flex h-full w-full',
          'flex-col items-center justify-center whitespace-normal',
          'bg-primary-500 p-5 text-center text-white',
          'opacity-0 transition duration-500 hover:opacity-90'
        )}
      >
        <p className="text-2xl">{name}</p>
        <p className="mt-4">{description}</p>
      </div>
      <img src={image} alt="Our classes" />
    </div>
  )
}
