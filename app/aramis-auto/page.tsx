import { Suspense } from 'react'
import Header from '@ui/header/Header'

import dataSetStockArrivage from './../../data/aramis-auto/stock-arrivage.json';
import dataSetStockSales from './../../data/aramis-auto/stock-vente.json';
import dataSetParking from './../../data/aramis-auto/taille-parking.json';

import styles from './../page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>


      <div className={styles.main_inner}>
        <div className={styles.header}>
          <Header current={'aramis-auto'} />
          <h1>Aramis Auto</h1>
        </div>
        <div className={styles.content}>
          <Suspense fallback={<>Loader</>}>
            <div className={styles.section}>
              <h2>dataSetStockArrivage</h2>
              {!!dataSetStockArrivage && Array.isArray(dataSetStockArrivage) ? JSON.stringify(dataSetStockArrivage[0]) : ''}
            </div>
          </Suspense>
          <Suspense fallback={<>Loader</>}>
            <div className={styles.section}>
              <h2>dataSetStockSales</h2>
              {!!dataSetStockSales && Array.isArray(dataSetStockSales) ? JSON.stringify(dataSetStockSales[0]) : ''}
            </div>
          </Suspense>
          <Suspense fallback={<>Loader</>}>
            <div className={styles.section}>
              <h2>dataSetParking</h2>
              {!!dataSetParking && Array.isArray(dataSetParking) ? JSON.stringify(dataSetParking[0]) : ''}
            </div>
          </Suspense>


        </div>
      </div>

    </main>
  )
}
