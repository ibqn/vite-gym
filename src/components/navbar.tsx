import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/logo.png'
import { classNames } from '@/util/class-names'
import { Link } from '@/components/link'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useContext, useEffect, useState } from 'react'
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
  const [isMenuToggled, setIsMenuToggled] = useState(false)

  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const { setSelectedPage } = useContext(SelectPageContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.HOME)
      } else {
        setIsTopOfPage(false)
      }
    }

    addEventListener('scroll', handleScroll)

    return () => removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <div
        className={classNames(
          flexBetween,
          isTopOfPage && 'bg-primary-100 drop-shadow',
          'fixed top-0 z-30 w-full py-6 transition-all duration-300'
        )}
      >
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
                <ActionButton link={SelectedPage.CONTACT_US}>
                  become a member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className={classNames('rounded-full bg-secondary-500 p-2')}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && (
        <div
          className={classNames(
            isMenuToggled ? 'translate-x-0' : 'translate-x-[300px]',
            'transition-all duration-300',
            'fixed bottom-0 right-0 z-30 flex h-full w-[300px] flex-col bg-primary-100 drop-shadow-xl'
          )}
        >
          <div className="flex justify-end p-12">
            <button
              className="rounded-full p-2 transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuToggled(false)}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <ul className="ml-[100px] flex flex-col gap-10 text-2xl capitalize">
            {pages.map((page, id) => {
              const { name } = page

              return (
                <li key={id} onClick={() => setIsMenuToggled(false)}>
                  <Link page={name} />
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
