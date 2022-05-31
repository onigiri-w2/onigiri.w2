import React from 'react'
import {Box, Text, VStack} from '@chakra-ui/react';


export const Footer = () => {
  return (
    <Box py={4} bg="cyan.800" color="white">
      <VStack justifyContent="center">
        <Text>©️onigiri.w2 2022</Text>
      </VStack>
    </Box>
  )
}
