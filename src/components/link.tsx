import { type ComponentProps, type MouseEventHandler } from 'react'

type LinkProps = {
  page: string
} & ComponentProps<'a'>

export const Link = (props: LinkProps) => {
  const { page } = props

  const link = page.toLowerCase().replace(/ /g, '-')

  const handleClick: MouseEventHandler = (event) => {
    const element = document.getElementById(link)
    event.preventDefault()

    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a href="/" onClick={handleClick}>
      {page}
    </a>
  )
}
