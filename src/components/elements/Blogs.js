import React from 'react'
import { Box, Text, Link, Heading } from '@chakra-ui/react'


export const Blogs = ({blogNodes}) => {
  return (
    <Box>
      {blogNodes.map(node => {
        return (
          <Box key={node.slug} p={[4,8,8]} mb={4} bg="white">
            <Link href={node.slug}>
              <Heading color="cyan.900" fontWeight="bold" fontSize={26}>{node.title}</Heading>
            </Link>
            <Heading mt={2} color="gray.600" fontWeight="normal" fontSize={12}>{node.date}</Heading>
            <Text 
              mt={4} 
              letterSpacing="wide"
              lineHeight={7}
              color="gray.600" 
              fontSize={16}
            >
              {node.description}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}
