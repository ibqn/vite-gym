import { type SelectedPage } from '@/hooks/use-select-page'
import { type ComponentProps } from 'react'

type AnchorLinkProps = {
  page: string
} & ComponentProps<'a'>

export const AnchorLink = (props: AnchorLinkProps) => {
  const { page, onClick, children, ...otherProps } = props

  const link = page.toLowerCase().replace(/ /g, '-') as SelectedPage

  const handleClick = () => {
    const element = document.getElementById(link)
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a
      {...otherProps}
      href="/"
      onClick={(event) => {
        event.preventDefault()
        onClick?.(event)
        handleClick()
      }}
    >
      {children}
    </a>
  )
}
