
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.maincontainer}>
          {/* <p className={styles.pbold}>Unmögliches ist bei uns unmöglich!</p> */}
        <div className={styles.heins}>    
          <h1 className={styles.maintitle}>Moin, wir sind <span className={styles.myname}>Dani-Line</span></h1>
        </div>


        <div className={styles.hzwei}>
          <h2 className={styles.maintitle}>Ihre <span className={styles.kreative}>kreative</span> Full-Stack-Web-Agentur</h2>
        </div>

        <div className={styles.hdrei}>
          <h3 className={styles.maintitle}>Starten Sie mit uns digital voll durch!</h3>
        </div>
        <div className={styles.hdrei}>
          <h3 className={styles.maintitle}>Starten Sie mit uns digital voll durch!</h3>
        </div>
        <div className={styles.hdrei}>
          <h3 className={styles.maintitle}>Starten Sie mit uns digital voll durch!</h3>
        </div>
        <div className={styles.hdrei}>
          <h3 className={styles.maintitle}>Starten Sie mit uns digital voll durch!</h3>
        </div>

    </main>
  )
}
