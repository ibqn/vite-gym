import { type SelectedPage, SelectPageContext } from '@/hooks/use-select-page'
import { classNames } from '@/util/class-names'
import { useContext, type ComponentProps } from 'react'
import { AnchorLink } from '@/components/anchor-link'

type LinkProps = ComponentProps<typeof AnchorLink>

export const Link = (props: LinkProps) => {
  const { selectedPage, setSelectedPage } = useContext(SelectPageContext)
  const { page } = props

  const link = page.toLowerCase().replace(/ /g, '-') as SelectedPage

  return (
    <AnchorLink
      page={page}
      className={classNames(
        selectedPage === link && 'text-primary-500',
        'transition-colors duration-300 hover:text-primary-300'
      )}
      onClick={() => setSelectedPage(link)}
    >
      {page}
    </AnchorLink>
  )
}
