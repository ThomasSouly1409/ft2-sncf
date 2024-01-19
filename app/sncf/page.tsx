import { Suspense } from 'react';
import styles from './../page.module.scss';


import dataSet1 from './../../data/sncf/dataset1.json';
import dataSet2 from './../../data/sncf/dataset2.json';
import Header from '@ui/header/Header';


export default function ScnfPage() {

  return (
    <main className={styles.main}>
      <div className={styles.main_inner}>
        <div className={styles.header}>
          <Header current={'sncf'} />
          <h1>SNCF</h1>
        </div>
        <div className={styles.content}>
          <Suspense fallback={<>Loader</>}>
            <div className={styles.section}>
              <h2>dataSet1</h2>
              {!!dataSet1 && Array.isArray(dataSet1) ? JSON.stringify(
                dataSet1[0]
              ) : ''}

              <br /><br />
              {!!!!dataSet1 && Array.isArray(dataSet1) &&
                <ul>
                  <li>
                    Sort  : {dataSet1
                      .filter((e: any) => { return !!e && !!e.Pax }).sort((a: any, b: any) => {
                        return a.Pax > b.Pax ? 1 : -1
                      })
                      .slice(0, 9)
                      .map((elt: any, index: number) => {
                        return <div key={`index_${index}`}>{elt['Identifiant unique']} - {elt.Pax}</div>
                      })}
                  </li>
                  <li>
                    Total Incidents : {dataSet1.filter((e: any) => {
                      return (!!e);
                    }).length}

                  </li>
                  <li>
                    Total Incidents Divers : {dataSet1.filter((e: any,) => {
                      return (!!e && e.Catégorie_défaillance === 'Divers')
                    }).length}

                  </li>
                  <li>
                    Total LYRIA divers en Août : {dataSet1.filter((e: any) => {
                      return (!!e && e.Axe === 'LYRIA' && e.Catégorie_défaillance === 'Divers' && e.Mois_circulation === 8)
                    }).length}
                  </li>
                  <li>
                    Total LYRIA Non divers : {dataSet1.filter((e: any) => {
                      return (!!e && e.Axe === 'LYRIA' && e.Catégorie_défaillance !== 'Divers')
                    }).length}

                  </li>
                </ul>
              }

            </div>
          </Suspense>
          <Suspense fallback={<>Loader</>}>
            <div className={styles.section}>
              <h2>dataSet2</h2>
              {!!dataSet2 && Array.isArray(dataSet2) ? JSON.stringify(dataSet2[0]) : ''}
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  )
}
