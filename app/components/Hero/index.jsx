"use client"

import { useRef, useEffect } from 'react'
import styles from './../../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Typed from 'typed.js'
import { motion } from 'framer-motion'

export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Muito prazer", "Meu nome é Gabriel Andreoni."],

            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 700,
        });


        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <main className={styles.heroContainer} id="home">
            <section className={styles.heroApresentation}>
                <div className={styles.bigHeading}>
                    <motion.span ref={el}
                        initial={{ opacity: 0 }}
                        animate={{ y: [-50, 0], opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
                <div className={styles.resumeProfile}>
                    <motion.h4
                        initial={{ opacity: 0 }}
                        animate={{ y: [-50, 0], opacity: 1 }}
                        transition={{ duration: 0.8 }}

                    >Sou um desenvolvedor front end apaixonado pelo que faz.
                        Construo desde landing pages, e-commerce até web-apps utilizando <span>React</span>.
                    </motion.h4>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ y: [-50, 0], opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href="mailto:gabriel.andreoni.developer@gmail.com">Entre em contato</Link>
                </motion.button>
            </section>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={styles.heroImage}
            >
                <Image src="/profile-photo.jpeg" alt='foto de perfil' width="400" height="400" />
            </motion.section>
        </main>
    )
}