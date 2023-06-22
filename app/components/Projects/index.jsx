"use client"

import DATA from '../../../PROJECTS.json'
import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HeaderIndicator from '../HeaderIndicator'
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <main className={styles.projectsContainer} id="projects">
            <HeaderIndicator header="Projetos" />

            <ul className={styles.projectList}>
                {DATA.projects.map((project, index) => {
                    return (
                        <motion.li
                            initial={{ opacity: 0 }}
                            animate={{ y: [50, 0], opacity: 1 }}
                            transition={{ duration: 1 }}
                            key={index}
                            className={styles.projectItem}>
                            <section className={styles.projectImageCover}>
                                <Link href={project.site} target='_blank' rel='external'>
                                    <Image
                                        src={`/${project.image}`}
                                        alt='Imagem de projetos realizados'
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Link>
                            </section>

                            <section className={styles.projectContent}>
                                <div className={styles.projectDescription}>
                                    <motion.h1
                                        initial={{ opacity: 0 }}
                                        animate={{ y: [50, 0], opacity: 1 }}
                                        transition={{ duration: 1.2 }}
                                        style={{
                                            fontSize: project.name === 'Sistema de Financiamentos de Veículos' ? '1.3em' : ''
                                        }}>{project.name}</motion.h1>
                                    <motion.h2
                                        initial={{ opacity: 0 }}
                                        animate={{ y: [50, 0], opacity: 1 }}
                                        transition={{ duration: 1.4 }}
                                    >{project.description}</motion.h2>
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={{ y: [50, 0], opacity: 1 }}
                                        transition={{ duration: 1.6 }}
                                    >{project.tecnologies.join(', ')}</motion.h3>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ y: [50, 0], opacity: 1 }}
                                    transition={{ duration: 1.8 }}
                                    className={styles.projectLinks}>
                                    <Link href={project.site} target='_blank' rel='external'>
                                        <Image src="/icons/global.png" alt="icone de um site" width="32" height="32" />
                                    </Link>
                                    <Link href={project.gitHub} target='_blank' rel='external'>
                                        <Image src="/icons/github.png" alt="icone de um site" width="32" height="32" />
                                    </Link>

                                </motion.div>
                            </section>
                        </motion.li>
                    )
                })}
            </ul>
        </main>
    )
}