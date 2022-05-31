// import React from "react"
// import { graphql } from "gatsby"
// import { Box, Heading, Text } from "@chakra-ui/react"
// import { Layout } from "../components/elements/Layout";


// export default function Blog({
//   data,
// }) {
//   const { markdownRemark } = data;
//   const { frontmatter, html } = markdownRemark;
//   return (
//     <Layout>
//       <Box bg="white" p={[4,8,8]} >
//         <Box mb={8}>
//           <Heading mb={2} fontWeight="normal" fontSize={14} color="gray.500">
//             {frontmatter.date}
//           </Heading>
//           <Heading fontSize={28}>{frontmatter.title}</Heading>
//         </Box>
//         <Box className="blog-post">
//           <div
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
//         </Box>
//       </Box>
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         date(formatString: "YYYY年MM月DD日")
//         slug
//         title
//       }
//     }
//   }
// `
