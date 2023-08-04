import Navigation from '@/Components/Navigation/navbar'
// import './globals.css'
import styles from '@/app/page.module.css'


export const metadata = {
  title: 'Madeline Full-Stack-Dev',
  description: 'Created by Madeline Streubel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={styles.globalbody}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
