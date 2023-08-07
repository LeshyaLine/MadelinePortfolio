import React from 'react';
import styles from '@/app/Kontakt/page.module.css';

function Kontakt() {
  return (
    <main className={styles.maincontainer}>
      <h1>Sag einfach Hallo!</h1>
      <section className={styles.kontaktcontainer}>
        <div className={styles.kontaktadresse}>
          <div>0176 / 20624073</div>
          <div>madeline.streubel.work@gmx.de</div>
          <div>Dorfstraße 40</div>
          <div>25569 Bahrenfleth</div>
        </div>
        <div className={styles.kontaktformular}>
        <input 
                type="text" 
                name="name"
                id="name"
                className={styles.input}
                placeholder="Name *"/> 
        <input 
                type="email"
                name="email"
                id="email"
                className={styles.input}
                placeholder="Email *"/>
        <input 
                type="text"
                name="telefon"
                id="telefon"
                className={styles.input}
                placeholder="Telefon"/>
        <textarea 
                name="note" 
                id="note" 
                cols="30" 
                rows="10"
                className={styles.input}
                placeholder="work in progress. pls send mail to madeline.streubel.work@gmail.com">
        </textarea>
        <button type='submit'>Absenden</button>
        </div>
      </section>
    </main>
  )
}

export default Kontakt