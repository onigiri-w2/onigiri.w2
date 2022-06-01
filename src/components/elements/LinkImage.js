import React from 'react'
import { Link } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'


const IMAGES = {
  'scrapbox': {cls: <StaticImage src="../../images/scrapbox.png" alt="scrapbox" width={19} />}
}

export const LinkImage = ({type, url}) => {
  return (
    <Link href={url} isExternal>
      {IMAGES[type].cls}
    </Link>
  )
}
