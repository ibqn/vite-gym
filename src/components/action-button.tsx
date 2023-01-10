import { type ComponentProps } from 'react'
import { AnchorLink } from '@/components/anchor-link'

type ActionButtonProps = ComponentProps<typeof AnchorLink>

export const ActionButton = (props: ActionButtonProps) => {
  return <AnchorLink {...props}></AnchorLink>
}
