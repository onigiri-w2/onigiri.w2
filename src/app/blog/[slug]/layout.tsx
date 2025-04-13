import styles from './markdown.module.css'


export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <article className={styles.markdown}>
      {children}
    </article>
  )
}
