import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import { classNames } from '@/util/class-names'
import { URL } from 'url'

type Props = {}

export const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return (
    <nav>
      <div className={classNames(flexBetween, 'fixed top-0 z-30 w-full py-6')}>
        <div className={classNames(flexBetween, 'container mx-auto')}>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={classNames(flexBetween)}>
            <ul className={classNames(flexBetween, 'gap-8 text-sm')}>
              <li>home</li>
              <li>benefits</li>
              <li>our classes</li>
              <li>contact us</li>
            </ul>
            <div>
              <a href="">sign in</a>
              <button>become a member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
