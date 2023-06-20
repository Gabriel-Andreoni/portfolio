"use client"

import { useRef, useEffect } from 'react'
import styles from './../../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Typed from 'typed.js'

export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Muito prazer", "Eu sou o Gabriel Andreoni."],

            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 700,
            loop: true,
            loopCount: Infinity,
        });


        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <main className={styles.heroContainer}>
            <section className={styles.heroApresentation}>
                <div className={styles.bigHeading}>
                    <span ref={el} />
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