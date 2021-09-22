import { FC } from 'react'
import Image from 'next/image'
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
import * as BannerImage from '../../../public/assets/Webp.net-resizeimage.png'







  const LandingBanner = () => {

    return (
        <Container>
            <div className="banner">
                <Image src={BannerImage} layout='responsive' width={600} height={400} />
            <BenCelloLogo />
            </div>
        </Container>
    )
  }






  export default LandingBanner;