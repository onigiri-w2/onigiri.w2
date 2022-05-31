import React from 'react'
import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image';


export const AboutMe = () => {
  return (
    <Box bg="white" p={4}>
      <Flex borderBottom="1px" pb={2} borderColor="gray.400" alignItems="center">
        <StaticImage src="../../images/icon.png" alt="icon" width={20}/>
        <Heading ml={2} fontSize="xl" color="gray.600">About Me</Heading>
      </Flex>
      <Box mt={4}>
        <Text lineHeight={1.6} color="gray.700">東京都内のフィンテック企業で主にAWSを弄ってる男。</Text>
        <Text lineHeight={1.6} color="gray.700">仕事ではインフラ関連のPM・設計・実装・テストをしてる。</Text>
        <Text lineHieght={1.6} color="gray.700">最近は保守案件（メンテ、移行など）が多い。</Text>
        <Text lineHeight={1.6} color="gray.700">プライベートではアプリをリリースして運営中で、もっとサービスを量産していこうと奮闘中。</Text>
        <Text mt={6} lineHeight={1.6} color="gray.700">技術スタック:  React, ReactNative, Python, AWS</Text>
      </Box>
    </Box>
  )
}
