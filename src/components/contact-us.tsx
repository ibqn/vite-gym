import { useForm } from 'react-hook-form'
import { Section } from '@/components/section'
import { SelectedPage } from '@/hooks/use-select-page'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/contact-us-page-graphic.png'
import EvolveTextGraphic from '@/assets/evolve-text.png'
import { HTitle } from '@/components/h-title'
import { classNames } from '@/util/class-names'

type Props = {}

type FormData = {
  name: string
  email: string
  message: string
}

export const ContactUs = (props: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
  }

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
          className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 1 },
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.name && (
              <p className="mt-1 text-primary-500">{errors.name?.message}</p>
            )}
            <input
              className={classNames(inputStyles)}
              type="text"
              placeholder="Name"
              {...register('name', {
                required: 'This field is required.',
                maxLength: { value: 100, message: 'Max length is 100 char.' },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-primary-500">{errors.email?.message}</p>
            )}
            <input
              className={inputStyles}
              type="text"
              placeholder="Email"
              {...register('email', {
                required: 'This field is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address.',
                },
              })}
            />

            {errors.message && (
              <p className="mt-1 text-primary-500">{errors.message?.message}</p>
            )}
            <textarea
              className={inputStyles}
              placeholder="Message"
              rows={4}
              cols={50}
              {...register('message', {
                required: 'This field is required.',
                maxLength: { value: 2000, message: 'Max length is 2000 char.' },
              })}
            />

            <button
              type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 uppercase transition duration-500 hover:text-white"
            >
              submit
            </button>
          </form>
        </motion.div>
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
