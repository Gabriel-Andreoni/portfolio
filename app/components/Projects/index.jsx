import DATA from '../../../PROJECTS.json'
import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HeaderIndicator from '../HeaderIndicator'

export default function Projects() {
    return (
        <main className={styles.projectsContainer}>
            <HeaderIndicator header="Projetos" />
            
            <ul className={styles.projectList}>
                {DATA.projects.map((project, index) => {
                    return (
                        <li key={index} className={styles.projectItem}>
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
                                    <h1 style={{
                                        fontSize: project.name === 'Sistema de Financiamentos de Veículos' ? '1.3em' : ''
                                    }}>{project.name}</h1>
                                    <h2>{project.description}</h2>
                                    <h3>{project.tecnologies.join(', ')}</h3>
                                </div>

                                <div className={styles.projectLinks}>
                                    <Link href={project.site} target='_blank' rel='external'>
                                        <Image src="/icons/global.png" alt="icone de um site" width="32" height="32" />
                                    </Link>
                                    <Link href={project.gitHub} target='_blank' rel='external'>
                                        <Image src="/icons/github.png" alt="icone de um site" width="32" height="32" />
                                    </Link>

                                </div>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}