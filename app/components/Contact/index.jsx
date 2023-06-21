"use client"
import { useState } from 'react'
import styles from '../../styles/Contact.module.css'
import emailjs from '@emailjs/browser'
import HeaderIndicator from '../HeaderIndicator'


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === "" || email === "" || message === "") {
            alert('Preencha todos os campos')
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        }

        emailjs.send('service_8qdauls', 'template_erll5fw', templateParams, 'Rp0KHZrxDvL9BV9Cj')
            .then((response) => {
                alert('Email enviado', response.text)
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log('Erro: ', error)
            })

        return
    }

    return (
        <main className={styles.contactContainer} id="contact">
            
            <HeaderIndicator header="Contato" />

            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                <div>
                    <label htmlFor="name">Nome Completo</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </div>

                <div>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    ></textarea>
                </div>

                <button type="submit">Enviar e-mail</button>
            </form>
        </main>
    )
} 