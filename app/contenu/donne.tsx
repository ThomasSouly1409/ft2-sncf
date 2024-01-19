import { useEffect, useState } from 'react'
import styles from '../ui/header/styles.module.scss'
import Link from 'next/link'
import { Main } from 'next/document'
import _ from 'lodash'

const Centre=({data, searchParams}) => {
    const currentRegion = searchParams.axe ?? "France";
    const currentDefaillance = searchParams.Catégorie_défaillance ?? "Aucun";

    const mcTotal = !!data && _.sumBy(data.filter((e) => {
        if (currentRegion !== "France") {
            return !!e && e.Axe === currentRegion
        } else {
            return e
        }
    }), function(o: any) {
        return (!!o && !!o.Montant_compensable) && Number(o.Montant_compensable.replace(",",".").replace(' €','').replace(' ','')); 
    });

    const trainSupTotal = !!data && _.sumBy(data.filter((e) => {
        if (currentRegion !== "France") {
            return !!e && e.Axe === currentRegion
        } else {
            return e
        }
    }), function(o: Object): number {
        return (!!o && !!o.Suppression) && o.Suppression; 
    });

    const paxTotal = !!data && _.sumBy(data.filter((e) => {
        if (currentRegion)
            {if (currentRegion != e.Axe)
            return 0}
        if (currentDefaillance)
            {if (currentDefaillance != e.Defaillance)
            return 0}
    }), function(o: any) {
        return Number(o.Pax); 
    });

    const nbTrainTotal = !!data ? data.length : 0;

    const EHTotal =( !!data && data.length > 0) && _.sumBy(data.filter((e) => {
        if (currentRegion !== "France") {
            return !!e && e.Axe === currentRegion
        } else {
            return e
        }
    }), function(o: any): number {
        return (!!o && !!o.EH) && Number(o.EH.replace(",",".")); 
    });

    const EHMoyen = Number(EHTotal / nbTrainTotal)

    return (
        <div>
            <div>
                <div>
                    {!!mcTotal && mcTotal.toFixed(0)} euros de montant compensable
                </div>
                <div>
                    {trainSupTotal} train supprimé
                </div>
                <div>
                    {paxTotal} personnes impactées
                </div>
                <div>
                    {EHMoyen.toFixed(0)} minutes de retard par train
                </div>
            </div>
        </div>
    )
} 

export default Centre;