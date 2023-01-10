import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import { classNames } from '@/util/class-names'
import { Link } from '@/components/link'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useContext, useState } from 'react'
import { ActionButton } from '@/components/action-button'
import { SelectedPage, SelectPageContext } from '@/hooks/use-select-page'

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
  const [isMenuToggled, setMenuToggled] = useState(false)
  const { setSelectedPage } = useContext(SelectPageContext)

  return (
    <nav>
      <div className={classNames(flexBetween, 'fixed top-0 z-30 w-full py-6')}>
        <div className={classNames(flexBetween, 'container mx-auto gap-16')}>
          <div>
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          {isAboveMediumScreens ? (
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
                <ActionButton
                  page={SelectedPage.CONTACT_US}
                  onClick={() => setSelectedPage(SelectedPage.CONTACT_US)}
                  className="rounded-md bg-secondary-500 px-10 py-2 transition-all hover:bg-primary-500 hover:text-white hover:shadow-md"
                >
                  become a member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button className={classNames('rounded-full bg-secondary-500 p-2')}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
