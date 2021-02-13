import React from 'react'
import { contact, title } from './contact.module.css'
import { FaTwitter, FaFacebook, FaRegEnvelope } from 'react-icons/fa'


const Contact = () => {
    return (
        <section className={contact}>
            <article>
                <div className={title}>
                    <h1>Connect</h1>
                    <h1>with</h1>
                    <h1>mel</h1>
                </div>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/mel.king.14661261">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MelKing92031915">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:authormelking@gmail.com">
                            <FaRegEnvelope />
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default Contact
