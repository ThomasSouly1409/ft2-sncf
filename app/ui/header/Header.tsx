import { usePathname, useSearchParams } from 'next/navigation';
import styles from './styles.module.scss'
import Link from 'next/link'

interface HeaderProps {
    current: 'home' | 'sncf' | 'aramis-auto' | 'charts';
    searchParams: Object;
}

const Header = async ({
    current, searchParams
}: HeaderProps) => {

    return (
        <header>
            <nav className={styles.navigation}>
                <ol>
                    <li><Link href={'/charts?range=mensuel&axe='+(searchParams.axe ?? 'France')} className={`${current === 'charts' && searchParams.range === "mensuel" ? styles.current : ''}`}><span>Mensuel</span></Link></li>
                    <li><Link href={'/charts?range=trimestriel&axe='+(searchParams.axe ?? 'France')} className={`${current === 'charts' && searchParams.range === "trimestriel"  ? styles.current : ''}`}><span>Trimestriel</span></Link></li>
                    <li><Link href={'/charts?range=annuel&axe='+(searchParams.axe ?? 'France')} className={`${current === 'charts' && searchParams.range === "annuel"  ? styles.current : ''}`}><span>Annuel</span></Link></li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;