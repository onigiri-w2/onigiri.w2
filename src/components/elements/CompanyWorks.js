import React from 'react';
import { Box, Heading, Icon, Flex, Text } from '@chakra-ui/react';
import { FaRegBuilding } from 'react-icons/fa';


export const CompanyWorks = () => {
  return (
    <Box bg="white" p={4}>
      <Flex borderBottom="1px" pb={2} borderColor="gray.400" alignItems="center">
        <Icon as={FaRegBuilding} w={6} h={6} mr={2} color="gray.600"/>
        <Heading fontSize="xl" color="gray.600">Company Work</Heading>
      </Flex>
      <Box>
        <Flex
          py={1}
          mt={6}
        >
          <Heading 
            fontSize="sm"
            color="gray.400"
          >
            2022年度
          </Heading>
        </Flex>
        <Box mt={6}>
          <Flex>
            <Heading 
              fontSize="md" 
              color="gray.700"
            >
              BtoCサービスのバッチ実行基盤を一部EC2からAWS Fargateに変更
            </Heading>
          </Flex>
          <Box ml={2} my={2}>
            <Text fontSize="sm" textAlign="left" color="gray.700">バッチの規模対応をしていく中でEC2をAWS Fargateに一部変更した。</Text>
            <Text fontSize="sm" textAlign="left" color="gray.700">Fargateの性能は結構厄介。性能要件がシビアなら、実はEC2の方が適してるかも。</Text>
            <Text fontSize="sm" textAlign="left" color="gray.700">この案件で性能・AWS・Dockerとちょっと友達になれた気がする。</Text>
          </Box>
        </Box>
        <Box mt={6}>
          <Flex>
            <Heading 
              fontSize="md" 
              color="gray.700"
            >
              BtoCサービスのAWS RDS強制メンテ対応
            </Heading>
          </Flex>
          <Box ml={2} my={2}>
            <Text fontSize="sm" textAlign="left" color="gray.700">本番稼働中のRDSに対して強制メンテナンスの通知が...。</Text>
            <Text fontSize="sm" textAlign="left" color="gray.700">関係者を集めて、サービス影響が小さいタイミングでメンテナンスを手動実施。</Text>
            <Text fontSize="sm" textAlign="left" color="gray.700">移行手順書 + リハーサルの重要性を知ることに。</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}