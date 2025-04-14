import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props) => {
      // 元のaタグコンポーネントを保持しつつ、target="_blank"とrel属性を追加
      return <a {...props} target="_blank" rel="noopener noreferrer" />
    },
  }
}
