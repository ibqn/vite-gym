import { SelectPageContext, type SelectedPage } from '@/hooks/use-select-page'
import { useContext, type ComponentProps } from 'react'

type AnchorLinkProps = {
  link: SelectedPage
} & ComponentProps<'a'>

export const AnchorLink = (props: AnchorLinkProps) => {
  const { link, onClick, children, ...otherProps } = props
  const { setSelectedPage } = useContext(SelectPageContext)

  const handleClick = () => {
    const element = document.getElementById(link)
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSelectedPage(link)
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
