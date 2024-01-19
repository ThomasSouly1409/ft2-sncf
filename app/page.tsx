import styles from './page.module.scss'
import Header from '@ui/header/Header'

export default function Page({searchParams}) {

  return (
    <main className={styles.main}>
      <div className={styles.main_inner}>
        <div className={styles.header}>
          <Header current={'home'} searchParams={searchParams} />
          <h1>Home #1</h1>
        </div>
        <div className={styles.content}>
        </div>
      </div>
    </main>
  )
}
