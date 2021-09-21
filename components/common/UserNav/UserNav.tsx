import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import type { LineItem } from '@commerce/types/cart'
import useCart from '@framework/cart/use-cart'
import useCustomer from '@framework/customer/use-customer'
import { Avatar } from '@components/common'
import { Heart, Bag } from '@components/icons'
import { useUI } from '@components/ui/context'
import DropdownMenu from './DropdownMenu'
import s from './UserNav.module.css'

interface Props {
  className?: string
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: FC<Props> = ({ className }) => {
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI()
  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {process.env.COMMERCE_CART_ENABLED && (
          <li className={s.item} onClick={toggleSidebar}>
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.52393H4.1687C5.20514 1.52393 6.06986 2.31571 6.16096 3.34814L6.35294 5.52393M21.5 19.5239H11.0179C9.47476 19.5239 8.06408 18.6521 7.37397 17.2719V17.2719C7.12723 16.7784 6.98329 16.2399 6.9509 15.6891L6.94118 15.5239M6.35294 5.52393H22.8119C24.1517 5.52393 25.1126 6.8154 24.7276 8.09862L23.3552 12.6733C22.8476 14.3653 21.2903 15.5239 19.5239 15.5239H6.94118M6.35294 5.52393L6.94118 15.5239" stroke="#3B4107" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="10.5" cy="22.5239" r="1.15" stroke="#3B4107" stroke-width="1.7"/>
<circle cx="20.5" cy="22.5239" r="1.15" stroke="#3B4107" stroke-width="1.7"/>
</svg>

            {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
          </li>
        )}
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <li className={s.item}>
            <Link href="/wishlist">
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
          </li>
        )}
        {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            {customer ? (
              <DropdownMenu />
            ) : (
              <button
                className={s.avatarButton}
                aria-label="Menu"
                onClick={() => openModal()}
              >
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="13" r="12.15" stroke="#3B4107" stroke-width="1.7"/>
<circle cx="14" cy="11.5" r="3.65" stroke="#3B4107" stroke-width="1.7"/>
<path d="M13.5855 15.85C15.4256 15.85 17.2311 16.6542 18.714 17.9441C20.0594 19.1143 21.0939 20.6466 21.6181 22.2271C20.3 23.3516 18.121 24.6442 15.4407 25.0608C12.6329 25.4972 9.21464 24.9836 5.56529 22.1904C6.09329 20.6228 7.12218 19.1052 8.45711 17.9441C9.94 16.6542 11.7455 15.85 13.5855 15.85Z" stroke="#3B4107" stroke-width="1.7"/>
</svg>

              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  )
}

export default UserNav
