import { SelectedPage } from '@/hooks/use-select-page'
import HomePageText from '@/assets/home-page-text.png'
import HomePageGraphic from '@/assets/home-page-graphic.png'

import SponsorRedBull from '@/assets/sponsor-red-bull.png'
import SponsorFortune from '@/assets/sponsor-fortune.png'
import SponsorForbes from '@/assets/sponsor-forbes.png'

import { ActionButton } from '@/components/action-button'
import { AnchorLink } from '@/components/anchor-link'

const sponsors = [
  { image: SponsorRedBull, name: 'Red Bull' },
  { image: SponsorForbes, name: 'Forbes' },
  { image: SponsorFortune, name: 'Fortune' },
]

type Props = {}

export const Home = (props: Props) => {
  return (
    <section
      id={SelectedPage.HOME}
      className="flex flex-col justify-between bg-gray-20 md:h-screen"
    >
      <div className="flex h-5/6 flex-col pt-32 md:flex-row">
        <div>
          <div className="md:basis-3/5">
            <img src={HomePageText} alt="Home Page Text" />
          </div>

          <p className="mt-8 text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of... Get Your Dream
            Body Now.
          </p>

          <div className="mt-8 flex items-center gap-8">
            <ActionButton link={SelectedPage.CONTACT_US}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              link={SelectedPage.CONTACT_US}
            >
              learn more
            </AnchorLink>
          </div>
        </div>

        <div className="flex flex-1 basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Home Page Graphic" />
        </div>
      </div>

      <div className="hidden bg-primary-100 py-8 md:flex">
        <div className="mx-auto flex w-5/6 items-center justify-between gap-8">
          {sponsors.map((sponsor, index) => {
            const { image, name } = sponsor
            return <img key={index} src={image} alt={`Sponsor ${name}`} />
          })}
        </div>
      </div>
    </section>
  )
}
