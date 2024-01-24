import styles from './page.module.scss'
import Header from '@ui/header/Header'
import pageAccueil from './home-page/pageAccueil'
import logo from '../img/sncf.png'
import train from '../img/amico.png'
import Image from 'next/image'
import Link from 'next/link'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Page({searchParams}) {

  return (
    <main className={styles.main}>
      <div className={styles.main_inner}>
        <div className={styles.header}>
          <div id='homeLeft'>
            <div>
              <Image src={logo}></Image>
            </div>
            <div>
              <p id='txtLog'>Bienvenue à nouveau</p>
              <p id='txtLog2'>Connectez-vous à votre compte</p>
            </div>
            <div className='formulaire'>
              <div className='divInput'> <input id='login' type="text" /> </div>
              <div className='divInput'> <input id='login' type="text" /> </div>
            </div>
            <div id='divCheck'>
              <FormControlLabel id='check' control={<Checkbox checked/>} sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} label="Rester connecté" />
            </div>
            <div id='divButton'>
              <Link id='buttonContinu' href={'/charts?range=annuel&axe='+(searchParams.axe ?? 'France')} className={`$`}><span>Se connecté</span></Link>
            </div>
          </div>
        </div>
        <div id='divImgTrain'>
          <Image id='imgTrain' src={train}></Image>
        </div>
      </div>
    </main>
  )
}
