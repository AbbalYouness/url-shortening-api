import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return <main className={styles.layout}>{children}</main>;
}
