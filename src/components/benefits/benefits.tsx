import { SelectedPage } from '@/hooks/use-select-page'
import { Section } from '@/components/section'
import { motion } from 'framer-motion'
import { benefits } from './items'
import { BenefitItem } from '../benefit-item'

type Props = {}

export const Benefits = (props: Props) => {
  return (
    <Section
      page={SelectedPage.BENEFITS}
      className="xbg-blue-300 mx-auto min-h-screen py-20 md:w-3/5"
    >
      <motion.div
        className="my-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="font-montserrat text-3xl font-bold uppercase">
          more than just gym.
        </h2>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-between gap-8 md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {benefits.map((benefit, index) => {
          return <BenefitItem key={index} benefit={benefit} />
        })}
      </motion.div>
    </Section>
  )
}