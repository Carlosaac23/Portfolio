import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

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
        setMessage('Message sent successfully');

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
        setMessage('Message not sent');
      });
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='text-2xl geistMono-bold text-white mb-10'>{t('contactTitle')}</h2>
      <div className='contact-container container grid'>
        <form action='' className='contact-form grid gap-4' id='contacto-form' onSubmit={handleSubmit}>
          <div className='contact-group grid gap-4'>
            <input
              type='text'
              name='userName'
              required
              placeholder={t('inputName')}
              className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] hover:border-[#767676] transition-all duration-300 placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-regular'
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              type='email'
              name='userEmail'
              required
              placeholder={t('inputEmail')}
              className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] hover:border-[#767676] transition-all duration-300 placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-regular'
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <textarea
            name='userMessage'
            required
            placeholder={t('inputMsg')}
            className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] hover:border-[#767676] transition-all duration-300 placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-regular h-44 resize-none mb-8'
            value={formData.userMessage}
            onChange={handleChange}
          />
          <p className='contact-message absolute self-center w-max bottom-20 text-lg text-[#d4d4d4] geist-regular' id='contact-message'>
            {message}
          </p>
          <button
            type='submit'
            className='button contact-button bg-[#0a0a0a] border border-[#262626] hover:border-[#767676] transitions-all duration-300  text-[#fafafa] geistMono-bold p-5 rounded-lg cursor-pointer self-center'
          >
            {t('button')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
