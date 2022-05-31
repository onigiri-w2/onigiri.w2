import React from 'react'
import { Box, Heading, Flex, Icon, Text, LinkBox, LinkOverlay, HStack, VStack } from '@chakra-ui/react'
import {BiHome} from 'react-icons/bi';
import { StaticImage } from 'gatsby-plugin-image';


export const PrivateWorks = () => {
  return (
    <Box bg="white" p={4}>
      <Flex borderBottom="1px" borderColor="gray.500" pb={2} alignItems="center">
        <Icon as={BiHome} w={6} h={6} mr={2} color="gray.600"/>
        <Heading fontSize="xl" color="gray.600">Private Work</Heading>
      </Flex>
      <LinkBox pt={4}>
        <LinkOverlay href='#'>
          <HStack alignItems="start">
            <StaticImage width={80} src="../../images/bikeparking-map.png" alt="bikeparking-map" />
            <Box>
              <Heading fontSize="md" color="cyan.800">バイク駐車場Map</Heading>
              <Text mt={2} color="gray.800" fontSize="sm">バイク駐車場の位置を地図で教えるモバイルアプリ</Text>
              <Text color="gray.800" fontSize="sm">ReactNative、python、AWS、mongodbなどを利用してる</Text>
            </Box>
          </HStack>
        </LinkOverlay>
      </LinkBox>
    </Box>
  )
}
