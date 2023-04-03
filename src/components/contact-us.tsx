import { useForm } from 'react-hook-form'
import { Section } from '@/components/section'
import { SelectedPage } from '@/hooks/use-select-page'
import { motion } from 'framer-motion'
import { HTitle } from './h-title'

type Props = {}

export const ContactUs = (props: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  return (
    <Section page={SelectedPage.CONTACT_US} className="pb-32 pt-24">
      <motion.div
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HTitle>
          <span className="text-primary-500">join now</span> to get in shape
        </HTitle>
        <p className="my-5">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </motion.div>
    </Section>
  )
}
