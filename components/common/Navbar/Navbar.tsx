import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import KinLogo from '@components/ui/Logo/KinLogo'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container>
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <KinLogo/>
            </a>
          </Link>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex justify-end">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end mr-6 ml-0 flex-1">
          <UserNav />
        </div>
      </div>
      <div className="flex pb-4 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
