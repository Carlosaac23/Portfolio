import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm('service_vzkaygi', 'template_f3xf32h', '#contacto-form', 'vWS_GMkpEirykpGRp')
      .then(() => {
        // Show sent message
        setMessage('Mensaje enviado exitosamente');

        // Delete message after 5s
        setTimeout(() => {
          setMessage('');
        }, 5000);

        // Delete fields
        setFormData({
          userName: '',
          userEmail: '',
          userMessage: '',
        });
      })
      .catch(() => {
        // Show unsent message
        setMessage('Mensaje no enviado (Error del servicio)');
      });
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='text-2xl geist-bold text-[#d4d4d4] mb-10'>Contact Me</h2>
      <div className='contact-container container grid'>
        <form action='' className='contact-form grid gap-4' id='contacto-form' onSubmit={handleSubmit}>
          <div className='contact-group grid gap-4'>
            <input
              type='text'
              name='userName'
              required
              placeholder='Introduce your name'
              className='contact-input p-4 rounded-lg border-2 border-[#0e0e0e] bg-[#0A0A0A] placeholder-[#A3A3A3] text-white geist-regular focus:outline-none focus:border-[#27272a] transition-colors duration-500 hover:border-1 hover:border-[#27272a]'
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              type='email'
              name='userEmail'
              required
              placeholder='Introduce your email'
              className='contact-input p-4 rounded-lg border-2 border-[#0e0e0e] bg-[#0A0A0A] placeholder-[#A3A3A3] text-white geist-regular focus:outline-none focus:border-[#27272a] transition-colors duration-500 hover:border-1 hover:border-[#27272a]'
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <textarea
            name='userMessage'
            required
            placeholder='Introduce your message'
            className='contact-input p-4 rounded-lg border-2 border-[#0e0e0e] bg-[#0A0A0A] placeholder-[#A3A3A3] text-white geist-regular h-44 resize-none mb-8 focus:outline-none focus:border-[#27272a] transition-colors duration-500 hover:border-1 hover:border-[#27272a]'
            value={formData.userMessage}
            onChange={handleChange}
          />
          <p className='contact-message absolute self-center bottom-20 text-sm text-white geist-bold' id='contact-message'>
            {message}
          </p>
          <button
            type='submit'
            className='button contact-button border-2 border-[#0e0e0e] bg-[#0A0A0A] transitions-colors duration-500 hover:bg-[#121212] text-[#A3A3A3] geist-bold p-5 rounded-lg cursor-pointer self-center'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
