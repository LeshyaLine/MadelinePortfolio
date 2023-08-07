
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.maincontainer}>
        <p className={styles.pbold}>Unmögliches ist bei uns unmöglich!</p>
        <h1 className={styles.maintitle}>Moin, wir sind <span className={styles.myname}>Dani-Line</span></h1>
        <h1 className={styles.maintitle}>Full-Stack-Web-Agentur</h1>
    </main>
  )
}
