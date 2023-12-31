import React from 'react';
import styles from '@/Components/Navigation/navbar.module.css';
import Link from 'next/link';

function Navigation() {
  return (
    <div className={styles.navigationcontainer}> 
        <Link href="/" className={styles.navigationlink}>Dani-Line</Link>
        <Link href="/About" className={styles.navigationlink}>Über</Link>
        <Link href="/Skills" className={styles.navigationlink}>Skills</Link>
        <Link href="/Projekte" className={styles.navigationlink}>Projekte</Link>
        <Link href="/Kontakt" className={styles.navigationlink}>Kontakt</Link>
    </div>
  )
}

export default Navigation