import styles from './../../styles/Header.module.css'
import Link from "next/link"

export default function Header() {

    return (
        <header className={styles.headerContainer} id="header">
            <nav className={styles.headerMenu}>
                <input type="checkbox" id="checkbox_toggle" className={styles.inputCheckBox} />
                <label htmlFor="checkbox_toggle" className={styles.hamburger}>
                    {'\u2630'}
                </label>

                <ul className={styles.headerMenuList} id="menuList">
                    <li className={styles.menuItem} data-aos="fade-up" >
                        <Link href="#header">Home</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="#about">Sobre</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="#projects">Projetos</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="#contact">Contato</Link>
                    </li>
                </ul>

                <button className={styles.headerButtonCv}>
                    <Link href="/curriculo-dev.docx" download>
                        Currículo
                    </Link>
                </button>
            </nav>
        </header>
    )
}