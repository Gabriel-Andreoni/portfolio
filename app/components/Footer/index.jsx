"use client"
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer className={styles.footerContainer} data-aos="fade-up" data-aos-duration="500">
            <section className={`${styles.footerSection} ${styles.footerHeader}`} data-aos="fade-up" data-aos-duration="500">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ y: [50, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >E agora?</motion.h1>
            </section>

            <section className={`${styles.footerSection}`} data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ y: [50, 0], opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >Me mande um e-mail</motion.h2>
            </section>

            <section className={`${styles.footerSection} `} data-aos="fade-up" data-aos-duration="500" data-aos-delay="700">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ y: [50, 0], opacity: 1 }}
                    transition={{ duration: 1.4 }}
                >Será um prazer poder conversar mais um pouco e discutir sobre novos projetos.
                    Meu e-mail está sempre disponível.</motion.h3>
            </section>

            <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="800">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ y: [50, 0], opacity: 1 }}
                    transition={{ duration: 1.6 }}
                >
                    <Link href="mailto:gabriel.andreoni.developer@gmail.com">Mande um oi</Link>
                </motion.button>
            </span>


            <section className={styles.footerBottom} data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ y: [50, 0], opacity: 1 }}
                    transition={{ duration: 1.8 }}
                >Projetado e criado por <span><Link href='https://www.linkedin.com/in/gabriel-andreoni-720784212/' target='_blank' rel='external'>Gabriel Andreoni</Link></span>.</motion.p>
            </section>
        </footer>
    )
}