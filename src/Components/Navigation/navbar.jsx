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
            <Link href="/" className={styles.navigationlink}>Dani-Line</Link>
            <Link href="/About" className={styles.navigationlink}>Wer wir sind</Link>
            <Link href="/Skills" className={styles.navigationlink}>Unsere Skills</Link>
            <Link href="/Projekte" className={styles.navigationlink}>Projekte</Link>
            <Link href="/Kontakt" className={styles.navigationlink}>Kontakt</Link>
        </div>
  </div>
  )
}

export default Navigation