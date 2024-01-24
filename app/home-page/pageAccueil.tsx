import { usePathname, useSearchParams } from 'next/navigation';
import styles from './styles.module.scss'
import Link from 'next/link'

interface HeaderProps {
    current: 'home' | 'sncf' | 'aramis-auto' | 'charts';
    searchParams: Object;
}

const pageAccueil = async ({
    current, searchParams
}: HeaderProps) => {

    return (
        <div>
            <Link href={'/charts?range=annuel&axe='+(searchParams.axe ?? 'France')} className={`${current === 'charts' && searchParams.range === "annuel" ? styles.current : ''}`}><span>Continuer</span></Link>
        </div>
    )
}

export default pageAccueil;