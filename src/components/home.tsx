import { motion } from 'framer-motion'
import { SelectedPage } from '@/hooks/use-select-page'

import HomePageText from '@/assets/home-page-text.png'
import EvolveText from '@/assets/evolve-text.png'
import HomePageGraphic from '@/assets/home-page-graphic.png'

import SponsorRedBull from '@/assets/sponsor-red-bull.png'
import SponsorFortune from '@/assets/sponsor-fortune.png'
import SponsorForbes from '@/assets/sponsor-forbes.png'

import { ActionButton } from '@/components/action-button'
import { AnchorLink } from '@/components/anchor-link'
import { Section } from '@/components/section'

const sponsors = [
  { image: SponsorRedBull, name: 'Red Bull' },
  { image: SponsorForbes, name: 'Forbes' },
  { image: SponsorFortune, name: 'Fortune' },
]

type Props = {}

export const Home = (props: Props) => {
  return (
    <Section
      page={SelectedPage.HOME}
      className="flex flex-col justify-between bg-gray-20 md:min-h-screen"
    >
      <div className="grid grid-cols-1 grid-rows-2 pt-32 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative flex">
              <div className="absolute -top-16 -left-16 z-0 flex">
                <img src={EvolveText} alt="Evolve Text" />
              </div>
              <img className="z-10" src={HomePageText} alt="Home Page Text" />
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of... Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton link={SelectedPage.CONTACT_US}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              link={SelectedPage.CONTACT_US}
            >
              learn more
            </AnchorLink>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-1 justify-center md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="Home Page Graphic" />
        </motion.div>
      </div>

      <div className="hidden bg-primary-100 py-8 md:flex">
        <div className="mx-auto flex w-5/6 items-center justify-between gap-8">
          {sponsors.map((sponsor, index) => {
            const { image, name } = sponsor
            return <img key={index} src={image} alt={`Sponsor ${name}`} />
          })}
        </div>
      </div>
    </Section>
  )
}
