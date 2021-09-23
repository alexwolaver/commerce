import { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
// import s from './LandingBanner.module.css'
import BenCelloLogo from '@components/common/BenCelloLogo'
import * as BannerImage from '../LandingBanner/LandingBanner.png'
import { Button } from '@components/ui'



const LandingBanner = () => {
  return (

    <div className="banner h-72">
      <Image className="bannerImage"
        src={BannerImage} />
      <BenCelloLogo className="benLogo" />
      <Button className="uscreen_btn">
        <Link href="https://watch.kinmedia.tv/">
          <a>See Episodes & More<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L8 8.5L1 15.5" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </a>
        </Link>
      </Button>
    </div>

  )
}


export default LandingBanner;