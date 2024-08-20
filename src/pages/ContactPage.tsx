import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Contact form <no-reply@onresend.com>`,
          'reply-to': `${formData.userName} <${formData.userEmail}>`,
          to: ['carlosaac23@hotmail.com'],
          subject: `Hi Carlos, it's me ${formData.userName} `,
          html: `<p>${formData.userMessage}</p>`,
        }),
      });

      if (response.ok) {
        toast.success(t('messageSent'));
        setFormData({
          userName: '',
          userEmail: '',
          userMessage: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error(t('messageNotSent'));
    }
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='text-2xl geistMono-Bold text-white mb-10'>{t('contactTitle')}</h2>
      <div className='contact-container container grid'>
        <form action='' className='contact-form grid gap-4' id='contacto-form' onSubmit={handleSubmit}>
          <div className='contact-group grid gap-4'>
            <input
              type='text'
              name='userName'
              required
              placeholder={t('inputName')}
              className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transition-all duration-300 ease placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-Regular'
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              type='email'
              name='userEmail'
              required
              placeholder={t('inputEmail')}
              className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transition-all duration-300 ease placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-Regular'
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          <textarea
            name='userMessage'
            required
            placeholder={t('inputMsg')}
            className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transition-all duration-300 ease placeholder-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-Regular h-44 resize-none mb-8'
            value={formData.userMessage}
            onChange={handleChange}
          />

          <button
            type='submit'
            className='button contact-button bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transitions-all duration-300 ease  text-white geistMono-Bold p-5 rounded-lg cursor-pointer self-center'
          >
            {t('button')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
