import styles from './header.module.css'

export default function Header(){
    return (
        <div className={styles.header}>
            <img src="https://philcoin.io/assets/images/logos/Philcoin_Logo.svg" className={styles.headerLogo} />
            <div className={styles.links}>
                <a className={styles.buttonOutline} href="https://philcoin.io/" target="_blank">PHILCOIN HOME</a>
            </div>
        </div>
    )
}