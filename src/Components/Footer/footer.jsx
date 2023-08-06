import React from 'react';
import styles from '@/Components/Footer/footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footercontainer}> 
        <Link href="/Impressum" className={styles.footerlink}>Impressum</Link>
        {/* <Link href="/About" className={styles.footerlink}>Über</Link>
        <Link href="/Skills" className={styles.footerlink}>Skills</Link>
        <Link href="/Projekte" className={styles.footerlink}>Projekte</Link>
        <Link href="/Kontakt" className={styles.footerlink}>Kontakt</Link> */}
    </div>
  )
}

export default Footer;