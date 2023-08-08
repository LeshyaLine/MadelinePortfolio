import React from 'react';
import styles from '@/Components/Navigation/navbar.module.css';
import Link from 'next/link';

function Navigation() {
  return (
  <div className={styles.navi_wrapper}>

        <div className={styles.logo}>
             <img className={styles.logoimage} src="/assets/logo-transparent-png.png" alt="logo" />
        </div>
        
        <div className={styles.navigationcontainer}> 

        <section className={styles.rundeeckensection}>
          <span className={styles.rundeeckenspan}>
            <Link href="/" className={styles.navigationlink}>Dani-Line</Link>
          </span>
        </section>
        <section className={styles.rundeeckensection}>
        <span className={styles.rundeeckenspan}>
            <Link href="/About" className={styles.navigationlink}>Wir sind...</Link>
            </span>
        </section>
        <section className={styles.rundeeckensection}>
        <span className={styles.rundeeckenspan}>
            <Link href="/Skills" className={styles.navigationlink}>Skills</Link>
            </span>
        </section>
        <section className={styles.rundeeckensection}>
        <span className={styles.rundeeckenspan}>
            <Link href="/Projekte" className={styles.navigationlink}>Projekte</Link>
            </span>
        </section>
        <section className={styles.rundeeckensection}>
        <span className={styles.rundeeckenspan}>
            <Link href="/Kontakt" className={styles.navigationlink}>Kontakt</Link>
            </span>
        </section>
        </div>

  </div>
  )
}

export default Navigation