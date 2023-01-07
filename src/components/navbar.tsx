import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import { classNames } from '@/util/class-names'
import { Link } from '@/components/link'
import { useMediaQuery } from '@/hooks/use-media-query'

type NavbarProps = {}

const pages = [
  { name: 'home' },
  { name: 'benefits' },
  { name: 'our classes' },
  { name: 'contact us' },
]

export const Navbar = (props: NavbarProps) => {
  const flexBetween = 'flex items-center justify-between'
  const isAboveMediumScreens = useMediaQuery(`(min-width: 1024px)`)
  return (
    <nav>
      <div className={classNames(flexBetween, 'fixed top-0 z-30 w-full py-6')}>
        <div className={classNames(flexBetween, 'container mx-auto gap-16')}>
          <div>
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <div className={classNames(flexBetween, 'w-full')}>
            <ul className={classNames(flexBetween, 'gap-8 text-sm')}>
              {pages.map((page, id) => {
                const { name } = page

                return (
                  <li key={id}>
                    <Link page={name} />
                  </li>
                )
              })}
            </ul>

            <div className={classNames(flexBetween, 'gap-8')}>
              <a href="">sign in</a>
              <button>become a member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
