import React from 'react';
import { Box, Heading, Icon, Flex, Text } from '@chakra-ui/react';
import { FaRegBuilding } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';


export const CompanyWorks = () => {
  const companyWorks = useStaticQuery(graphql`
    query MyQuery {
      allCompanyWorksJson {
        edges {
          node {
            works {
              descriptions
              title
            }
            year
          }
        }
      }
    }
  `)
  return (
    <Box bg="white" p={4}>
      <Flex borderBottom="1px" pb={2} borderColor="gray.400" alignItems="center">
        <Icon as={FaRegBuilding} w={6} h={6} mr={2} color="gray.600"/>
        <Heading fontSize="xl" color="gray.600">Company Work</Heading>
      </Flex>
      {companyWorks.allCompanyWorksJson.edges.map(companyWork => {
        return (
          <Box key={companyWork.node.year}>
            <Flex py={1} mt={6}>
              <Heading fontSize="sm" color="gray.400">{companyWork.node.year}年度</Heading>
            </Flex>
            {companyWork.node.works.map(work => {
              return (
                <Box mt={6}>
                  <Heading fontSize="md" color="gray.700">{work.title}</Heading>
                  <Box ml={2} my={2}>
                    {work.descriptions.map(description => 
                      <Text fontSize="sm" textAlign="left" color="gray.700">{description}</Text>
                    )}
                  </Box>
                </Box>
              )
            })}
          </Box>
        )
      })}
    </Box>
  )
}