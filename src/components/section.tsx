import { type ComponentProps, useContext } from 'react'
import { type SelectedPage, SelectPageContext } from '@/hooks/use-select-page'
import { motion } from 'framer-motion'

type Props = {
  page: SelectedPage
} & ComponentProps<'section'>

export const Section = (props: Props) => {
  const { setSelectedPage } = useContext(SelectPageContext)
  const { page, children, className } = props

  return (
    <div className="container mx-auto">
      <motion.section
        onViewportEnter={() => setSelectedPage(page)}
        className={className}
        id={page}
      >
        {children}
      </motion.section>
    </div>
  )
}
