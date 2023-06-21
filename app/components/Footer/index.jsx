import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footerContainer} data-aos="fade-up" data-aos-duration="500">
            <section className={`${styles.footerSection} ${styles.footerHeader}`} data-aos="fade-up" data-aos-duration="500">
                <h1>E agora?</h1>
            </section>

            <section className={`${styles.footerSection}`} data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                <h2>Me mande um e-mail</h2>
            </section>

            <section className={`${styles.footerSection} `} data-aos="fade-up" data-aos-duration="500" data-aos-delay="700">
                <h3>Será um prazer poder conversar mais um pouco e discutir sobre novos projetos.
                    Minha e-mail está sempre disponível.</h3>
            </section>

            <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="800">
                <button>
                    <Link href="mailto:gabriel.andreoni.developer@gmail.com">Diga olá</Link>
                </button>
            </span>


            <section className={styles.footerBottom} data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">
                <p>Projetado e criado por <span><Link href='https://www.linkedin.com/in/gabriel-andreoni-720784212/' target='_blank' rel='external'>Gabriel Andreoni</Link></span>.</p>
            </section>
        </footer>
    )
}