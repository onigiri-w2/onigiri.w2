import React from 'react'
import { Box, Link, Heading, HStack, Center } from '@chakra-ui/react'
import "@fontsource/noto-sans-jp"
import "@fontsource/noto-serif-jp"
import { StaticImage } from 'gatsby-plugin-image';
import { LinkImage } from './LinkImage';
import { LinkIcon } from './LinkIcon';


export const Header = () => {
  return (
    <Box alignItems="center" justifyContent="center" py={4} px={[2,2,0]}>
      <Center>
        <Link href="/" style={styles.link}>
          <HStack height="100%">
            <StaticImage src="../../images/onigiri.png" alt="onigiri" width={36} />
            <Heading color={"cyan.800"} fontSize={32}>onigiri.w2</Heading>
          </HStack>
        </Link>
      </Center>
      <Center mt={4}>
        <Box mx="2"><LinkIcon type="twitter" url="https://twitter.com/W2Onigiri" /></Box>
        <Box mx="2"><LinkIcon type="github" url="https://github.com/onigiri-w2" /></Box>
        <Box mx="2"><LinkImage type="scrapbox" url="https://scrapbox.io/onigiri-it-tips/" /></Box>
      </Center>
    </Box>
  )
}


const styles = {
  link: {
    textDecoration: 'none'
  }
}
