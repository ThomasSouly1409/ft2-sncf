'use client'
import Link from 'next/link'
import styles from '../ui/header/styles.module.scss'
import _, { filter } from 'lodash'
import { useEffect, useState } from 'react'
import logo from '../../img/sncf.png'
import pp from '../../img/Stephane_Ferron.png'
import tableau from '../../img/Template.png'
import tag from '../../img/ping.png'
import plus from '../../img/ic_baseline-plus.png'
import Image from 'next/image'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

let localisation = "la France"

const Hero =({data, searchParams}) => {

    const geolocalisation = () => {
        return localisation = "l'axe Sud-Est"
    }

/*    const mcTotal = data.reduce((acc, item)=> {
        console.log(acc)
        acc = acc + (item.Montant_compensable || 0);
        return acc;
    }, 0)
    
    const paxTotal = data.reduce((acc, item)=> {
        acc = acc + (item.Pax || 0);
        return acc;
    }, 0)//** */

    const currentRegion=searchParams.axe ?? 'France'
    const [currentAlea, setCurrentAlea] = useState<any> ("")
    const [dataUsed, setDataUsed] = useState<any>();


    useEffect(() => {

        if (!!data) {
            setDataUsed(data);
        }
    }, []);


    const mcTotal = !!dataUsed && _.sumBy(dataUsed.filter((e) => {
        if (currentRegion !== "France") {
            return !!e && e.Axe === currentRegion
        } else {
            return e
        }
    }), function(o: any) {
        return (!!o && !!o.Montant_compensable) && Number(o.Montant_compensable.replace(",",".").replace(' €','').replace(' ','')); 
    });

    const paxTotal = !!dataUsed && _.sumBy(dataUsed.filter((e) => {
        if (currentRegion !== "France") {
            return !!e && e.Axe === currentRegion
        } else {
            return e
        }
    }), function(o: any) {
        return Number(o.Pax); 
    });

    const nbTrainTotal = !!dataUsed ? dataUsed.length : 0;

    const EHTotal =( !!dataUsed && dataUsed.length > 0) && _.sumBy(dataUsed.filter((e) => {
        if (currentRegion !== "France") {
            return !!e && e.Axe === currentRegion
        } else {
            return e
        }
    }), function(o: any) {
        return (!!o && !!o.EH) && Number(o.EH.replace(",",".")); 
    });

    const EHMoyen = Number(EHTotal / nbTrainTotal)

    const axes = data.reduce((acc, item) => {
        if(!acc.includes(item.Axe)) acc.push(item.Axe);
        return acc;
    }, [])

    const defaillances = data.reduce((acc, item) => {
        if(!acc.includes(item.Catégorie_défaillance)) acc.push(item.Catégorie_défaillance);
        return acc;
    }, [])

    const filtreRegion = (region: any) => {
        console.log(region)
        setCurrentRegion(region)
    }

    return (
        <div className='hero'>
            <div id='partiGauche'>
                <div id='dataRegion'>
                    <div>
                        <div id='logo'>
                            <Image id='tailleLogo' src={logo} alt="logo" />
                        </div>
                        <div id='profil'> 
                            <div>
                                <Image src={pp} alt='photo de profil'></Image>
                            </div>
                            <div id='nom'>
                                <p>Stephane Ferron</p>
                            </div>       
                        </div>
                        <div>
                            <div className='menu'>
                                <div className='iconGauche'>
                                <Image src={tableau} alt='tableau'/>
                                </div>
                                <p className='txtMenu'>Tableau de bord</p>
                            </div>
                            <div className='menu'>
                                <Image src={tag} alt='epingle'/>
                                <p className='txtMenu'>Epinglés</p>
                            </div>
                            <div className='menu'>
                                <Image src={plus} alt='plus'/>
                                <p className='txtMenu'>Créer un tableau</p>
                            </div>
                        </div>
                        <p>vous êtes bien sur {currentRegion}</p>
                        <p>type d'intemperie : {currentAlea}</p>
                    </div>
                    
                </div>
                <div id='divPartiFiltre'>
                    <p id='partiFiltre'>Filters</p>
                </div>
                <div id='filtre'>
                    <div>
                        <p id="titreGauche">AXE</p>
                        <nav >
                            <ol>
                                <li>
                                    <Link href={'/charts?range='+searchParams.range+'&axe=France'} className={`${searchParams.range === "mensuel" ? styles.current : ''}`}>
                                        <span>France</span>
                                    </Link>
                                </li>
                                {axes.map(axe => 
                                <li>
                                    <Link href={'/charts?range='+searchParams.range+'&axe='+axe} className={`${searchParams.range === "mensuel" ? styles.current : ''}`}>
                                        <FormControlLabel control={<Checkbox checked = {searchParams.axe == axe}/>} label={axe} />
                                    </Link>
                                </li>)}
                            </ol>
                        </nav>
                    </div>
                    <div>
                        <p id="titreGauche">Défaillance</p>
                        <nav >
                            <ol>
                                {defaillances.map(defaillance =>
                                <li>
                                    <Link href={'/charts?range='+searchParams.range+'&axe='+defaillance} className={`${searchParams.range === "mensuel" ? styles.current : ''}`}>
                                        <FormControlLabel control={<Checkbox checked = {searchParams.defaillance == defaillance}/>} label={defaillance} />
                                    </Link>
                                </li>)}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;