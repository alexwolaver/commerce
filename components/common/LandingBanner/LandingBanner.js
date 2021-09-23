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


const LandingBanner = () => {
  return (

    <div className="banner">
      <Image className="bannerImage"
        src={BannerImage} />
      <BenCelloLogo className="benLogo" />
    </div>

  )
}


export default LandingBanner;