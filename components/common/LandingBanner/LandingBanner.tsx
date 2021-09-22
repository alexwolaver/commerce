import { FC } from 'react'
import Image from 'next/image'
import './LandingBanner.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './LandingBanner.module.css'
import BenCelloLogo from '@components/common/BenCelloLogo'
import * as BannerImage from '../LandingBanner/LandingBanner.png'


interface Props {
    className?: string
    children?: any
    pages?: Page[]
  }
  
  const links = [
    {
      name: 'Home',
      url: '/',
    },
  ]
  
  const LandingBanner: FC<Props> = ({ className, pages }) => {
    const { sitePages } = usePages(pages)
    const rootClassName = cn(s.root, className)


    return (
        <Container>
            <div className="banner">
                <Image className="bannerImage" src={BannerImage} layout='responsive' width={400} height={200} objectPosition='realative' />
            <BenCelloLogo />
            </div>
        </Container>
    )
  }


  function usePages(pages?: Page[]) {
    const { locale } = useRouter()
    const sitePages: Page[] = []
  
    if (pages) {
      pages.forEach((page) => {
        const slug = page.url && getSlug(page.url)
        if (!slug) return
        if (locale && !slug.startsWith(`${locale}/`)) return
        sitePages.push(page)
      })
    }
  
    return {
      sitePages: sitePages.sort(bySortOrder),
    }
  }
  
  // Sort pages by the sort order assigned in the BC dashboard
  function bySortOrder(a: Page, b: Page) {
    return (a.sort_order ?? 0) - (b.sort_order ?? 0)
  }



  export default LandingBanner;