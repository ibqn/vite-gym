import { ComponentProps } from 'react'

type LinkProps = {
  page: string
} & ComponentProps<'a'>

export const Link = (props: LinkProps) => {
  return <a>Link</a>
}
