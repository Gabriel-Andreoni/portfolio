"use client"

import styles from '../../styles/About.module.css'
import Image from 'next/image'
import HeaderIndicator from '../HeaderIndicator'
import { motion } from 'framer-motion'

export default function About() {
    const sourceIcons = [
        { name: 'HTML', src: 'icons/html-icon.png', alt: 'HTML icon' },
        { name: 'CSS', src: 'icons/css-icon.png', alt: 'CSS icon' },
        { name: 'TAILWIND', src: 'icons/tailwind-icon.png', alt: 'TAILWIND icon' },
        { name: 'LESS', src: 'icons/less-icon.png', alt: 'LESS icon' },
        { name: 'SASS', src: 'icons/sass-icon.png', alt: 'SASS icon' },
        { name: 'BOOTSTRAP', src: 'icons/bootstrap-icon.png', alt: 'BOOTSTRAP icon' },
        { name: 'JAVACRIPT', src: 'icons/js-icon.png', alt: 'JS icon' },
        { name: 'NODE', src: 'icons/node-icon.png', alt: 'NODE icon' },
        { name: 'REACT', src: 'icons/react-icon.png', alt: 'React icon' },
        { name: 'REACT NATIVE', src: 'icons/react-native-icon.png', alt: 'React native icon' },
        { name: 'NEXTJS', src: 'icons/next-icon.png', alt: 'Next icon' },
    ]

    return (
        <main className={styles.aboutContainer} id="about">
            <HeaderIndicator header="Sobre" />

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 0.8 }}
            ><span className={styles.highlightText}>Olá,</span> meu nome é <span className={styles.highlightText}>Gabriel Andreoni</span> e é um <span>prazer</span> conhecer você.</motion.h1>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1 }}
            > Sou <span className={styles.highlightText}>apaixonado</span> pelo mundo da tecnologia, meu primeiro contato com esse mundo foi em 2013 quando desevolvi algumas páginas em HTML utilizando o saudosista <span className={styles.highlightText}>Adobe Dreamweaver.</span> Nesse meio tempo também desenvolvi alguns projetos em <span className={styles.highlightText}>Pascal</span> e de lá para cá fui me apaixonando cada vez mais com os desafios e satisfações que o mundo da programação nos proporciona.</motion.h2>

            <motion.h3
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1.2 }}
            >Atualmente meu foco é em React, mais precisamente em <span className={styles.highlightText}>NextJS</span> e busco me tornar um desenvolvedor <span className={styles.highlightText}>Full Stack</span> utilizando a <span className={styles.highlightText}>MERN</span> stack.</motion.h3>

            <motion.h4
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1.4 }}
            >Abaixo estão as tecnologias que domino e tenho contado no meu dia a dia, mas é claro, estou sempre aberto a novas tecnologias.</motion.h4>

            <ul className={styles.habilitiesContainer}>
                {sourceIcons.map((src, index) => {
                    return (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ y: [50, 0], opacity: 1 }}
                            transition={{ duration: 1.6 }}
                        >
                            <Image src={`/${src.src}`} alt={src.alt} width='40' height='40' />

                            <span>
                                {src.name}
                            </span>
                        </motion.li>
                    )
                })}
            </ul>
        </main>
    )
} 