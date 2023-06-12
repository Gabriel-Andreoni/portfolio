import styles from './../../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
    return (
        <main className={styles.heroContainer}>
            <section className={styles.heroApresentation}>
                <div className={styles.fistTitleContainer}>
                    <h1 className={styles.firstTitle}>Olá, meu nome é</h1>
                </div>
                <div className={styles.bigHeading}>
                    <h2>Gabriel Andreoni</h2>
                    <h3>Eu desenvolvo coisas para a web.</h3>
                </div>
                <div className={styles.resumeProfile}>
                    <h4>Sou um desenvolvedor front end apaixonado pelo que faz.
                        Construo desde landing pages, e-commerce até web-apps utilizando <span>React</span>.
                    </h4>
                </div>
                <button>
                    <Link href="mailto:gabriel.andreoni.developer@gmail.com">Entre em contato</Link>
                </button>
            </section>

            <section className={styles.heroImage}>
                <Image src="/profile-photo.jpg" alt='foto de perfil' width="400" height="400" />
            </section>
        </main>
    )
}