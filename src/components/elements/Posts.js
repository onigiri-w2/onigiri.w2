import React from 'react'
import { Box, Flex, Icon, Heading, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { graphql, useStaticQuery } from 'gatsby'
import { BsFillFilePostFill } from 'react-icons/bs';


export const Posts = () => {
  const posts = useStaticQuery(graphql`
    query HeaderQuery {
      allPostsJson {
        edges {
          node {
            title
            url
            description
            date
          }
        }
      }
    }
  `)

  return (
    <Box bg="white" p={4}>
      <Flex borderBottom="1px" pb={2} borderColor="gray.400" alignItems="center">
        <Icon as={BsFillFilePostFill} w={6} h={6} mr={2} color="gray.600"/>
        <Heading fontSize="xl" color="gray.600">Posts</Heading>
      </Flex>
      <Box>
        {posts.allPostsJson.edges.slice(0,4).map((post, i) => 
          <Box key={post.node.title} mt={6}> 
            <Heading as='u' fontSize="md" color="cyan.700">
              <Link href={post.node.url} isExternal>
                {post.node.title} <ExternalLinkIcon mx="2px" />
              </Link>
            </Heading>
            <Text
              fontSize="sm" 
              textAlign="left" 
              color="gray.500"
            >
              {post.node.date}
            </Text>
            <Text
              mt={1}
              fontSize="sm" 
              textAlign="left" 
              color="gray.700"
            >
              {post.node.description}
            </Text>
          </Box>
        )}
        <Text mt={6} fontSize="sm" color="cyan.700">
          <Link href="https://zenn.dev/onigiri_w2" isExternal>
            &gt;&gt; もっと見る
          </Link>
        </Text>
      </Box>
    </Box>
  )
}
