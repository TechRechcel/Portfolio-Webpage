import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hq4lh8k', 'template_2b9y8hc', form.current, 'YOUR_PUBLIC_KEY')
        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>


            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>rechceltoledo@gmail.com</h5>
                        <a target="_blank" href="mailto:rechceltoledo@gmail.com">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Rechcel Toledo</h5>
                        <a target="_blank" href="https://m.me/rechceltoledo">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+639451526405</h5>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone+9451526405">Send a message</a>
                    </article>
                </div>

                {/* <div className="contact__form">*/}
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" id="" cols="30" rows="7" required>Your Message</textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
        );
    }