import { type ComponentProps } from 'react'
import { AnchorLink } from '@/components/anchor-link'
import { classNames } from '@/util/class-names'

type ActionButtonProps = ComponentProps<typeof AnchorLink>

export const ActionButton = (props: ActionButtonProps) => {
  const { className, ...otherProps } = props
  return (
    <AnchorLink
      className={classNames(
        className,
        'rounded-md bg-secondary-500 px-10 py-2 transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-md'
      )}
      {...otherProps}
    />
  )
}
