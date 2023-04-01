import { motion } from 'framer-motion'
import { type Benefit } from '@/components/benefits/items'
import { AnchorLink } from '@/components/anchor-link'
import { SelectedPage } from '@/hooks/use-select-page'

type Props = {
  benefit: Benefit
}

export const BenefitItem = ({ benefit }: Props) => {
  const { icon: Icon, title, description } = benefit
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-5 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {<Icon className="h-6 w-6" />}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        link={SelectedPage.CONTACT_US}
      >
        learn more
      </AnchorLink>
    </motion.div>
  )
}
