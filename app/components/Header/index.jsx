"use client"
import styles from './../../styles/Header.module.css'
import Link from "next/link"
import { motion } from 'framer-motion'

export default function Header() {

    return (
        <header className={styles.headerContainer} id="header">
            <nav className={styles.headerMenu}>
                <input type="checkbox" id="checkbox_toggle" className={styles.inputCheckBox} />
                <label htmlFor="checkbox_toggle" className={styles.hamburger}>
                    {'\u2630'}
                </label>

                <ul className={styles.headerMenuList} id="menuList">
                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ y: [-50, 0], opacity: 1 }}


                        className={styles.menuItem}>
                        <Link href="#header">Home</Link>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ y: [-50, 0], opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className={styles.menuItem}>
                        <Link href="#about">Sobre</Link>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ y: [-50, 0], opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className={styles.menuItem}>
                        <Link href="#projects">Projetos</Link>
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ y: [-50, 0], opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className={styles.menuItem}>
                        <Link href="#contact">Contato</Link>
                    </motion.li>
                </ul>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ y: [-50, 0], opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className={styles.headerButtonCv}>
                    <Link href="/curriculo-dev.docx" download>
                        Currículo
                    </Link>
                </motion.button>
            </nav>
        </header>
    )
}