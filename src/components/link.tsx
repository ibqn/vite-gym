import { type SelectedPage, SelectPageContext } from '@/hooks/use-select-page'
import { classNames } from '@/util/class-names'
import { useContext, type ComponentProps, type MouseEventHandler } from 'react'

type LinkProps = {
  page: string
} & ComponentProps<'a'>

export const Link = (props: LinkProps) => {
  const { selectedPage, setSelectedPage } = useContext(SelectPageContext)
  const { page } = props

  const link = page.toLowerCase().replace(/ /g, '-') as SelectedPage

  const handleClick: MouseEventHandler = (event) => {
    const element = document.getElementById(link)
    event.preventDefault()
    setSelectedPage(link)
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a
      href="/"
      className={classNames(
        selectedPage === link && 'text-primary-500',
        'transition-colors duration-300 hover:text-primary-300'
      )}
      onClick={handleClick}
    >
      {page}
    </a>
  )
}
