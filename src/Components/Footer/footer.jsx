import React from 'react';
import styles from '@/Components/Footer/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.footercontainer}> 
        <Link href="/Impressum" className={styles.footerlink}>Impressum</Link>
        <p>©Madeline Streubel & Daniel Stranz</p>
        {/* <Link href="/Facebook" className={styles.footerlink}><p><Image src="/assets/facebook.png" width={50} height={50}></Image></p></Link>
        <Link href="/Skills" className={styles.footerlink}>Skills</Link>
        <Link href="/Projekte" className={styles.footerlink}>Projekte</Link>
        <Link href="/Kontakt" className={styles.footerlink}>Kontakt</Link>*/}
    </div> 
  )
}

export default Footer;