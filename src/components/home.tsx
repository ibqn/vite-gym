import { SelectedPage } from '@/hooks/use-select-page'
import HomePageText from '@/assets/home-page-text.png'
import { ActionButton } from './action-button'

type Props = {}

export const Home = (props: Props) => {
  return (
    <section id={SelectedPage.HOME} className="h-[1000px] bg-green-300">
      <div>
        <img src={HomePageText} alt="Home Page Text" />
      </div>

      <p>
        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
        Studios to get the Body Shapes That you Dream of... Get Your Dream Body
        Now.
      </p>
      <div>
        <ActionButton link={SelectedPage.CONTACT_US}>Join Now</ActionButton>
      </div>
    </section>
  )
}
