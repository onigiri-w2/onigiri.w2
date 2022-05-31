import React from 'react'
import { Icon, Link } from '@chakra-ui/react';
import { BsGithub, BsTwitter } from 'react-icons/bs'


const ICONS = {
  'github': {cls: BsGithub, color: '#000'},
  'twitter': {cls: BsTwitter, color: '#00acee'}
}


export const LinkIcon = ({type, url, size=5}) => {
  const icon = ICONS[type];

  return (
    <Link href={url} isExternal>
      <Icon as={icon.cls} w={size} h={size} color={icon.color} />
    </Link>
  )
}
