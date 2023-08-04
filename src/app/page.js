
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.maincontainer}>
        <p className={styles.pbold}>Unmögliches ist bei mir unmöglich!</p>
        <h1 className={styles.maintitle}>Hi, ich bin <span className={styles.myname}>Madeline</span></h1>
        <h1 className={styles.maintitle}>Full-Stack-Web-Dev</h1>
    </main>
  )
}
