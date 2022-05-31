import * as React from "react"
import { Box } from "@chakra-ui/react"
import { Layout } from "/src/components/elements/Layout"
import { CompanyWorks } from "/src/components/elements/CompanyWorks"
import { PrivateWorks } from "../components/elements/PrivateWorks"
import { AboutMe } from "../components/elements/AboutMe"
import { Posts } from "../components/elements/Posts"


const IndexPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Box my={8}><Posts /></Box>
      <Box my={8}><PrivateWorks /></Box>
      <Box my={8}><CompanyWorks /></Box>
    </Layout>
  )
}

export default IndexPage
