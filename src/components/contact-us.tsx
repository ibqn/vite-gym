import { useForm } from 'react-hook-form'
import { Section } from '@/components/section'
import { SelectedPage } from '@/hooks/use-select-page'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/contact-us-page-graphic.png'
import EvolveTextGraphic from '@/assets/evolve-text.png'
import { HTitle } from '@/components/h-title'

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

      <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row">
        <motion.div
          className="mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative flex">
            <img
              className="absolute -bottom-16 -right-10 w-full"
              src={EvolveTextGraphic}
              alt="Evolve"
            />
            <img
              className="z-10 w-full"
              alt="contact-us-page-graphic"
              src={ContactUsPageGraphic}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
