import React from 'react';
import styles from '@/app/Impressum/page.module.css';
function Impressum() {

  return (
    <div className={styles.impressumcontainer}>
        <div className={styles.impressumliste}>
            <ul>
                <li>Eins</li>
                <li>Zwei</li>
                <li>Drei</li>
                <li>Vier</li>
            </ul>
        </div>
        <div>Hier ein hässliches Bild</div>


    </div>
  )
}

export default Impressum;