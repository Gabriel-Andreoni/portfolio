"use client"
import styles from './../../styles/Header.module.css'
import Link from "next/link"

export default function Header() {

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.headerMenu}>
                <input type="checkbox" id="checkbox_toggle" className={styles.inputCheckBox} />
                <label htmlFor="checkbox_toggle" className={styles.hamburger}>
                    {'\u2630'}
                </label>
                
                <ul className={styles.headerMenuList} id="menuList">
                    <li className={styles.menuItem}>Home</li>
                    <li className={styles.menuItem}>Sobre</li>
                    <li className={styles.menuItem}>Projetos</li>
                    <li className={styles.menuItem}>Contato</li>
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