import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    userName: '',
    userLastName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.userName && !formData.userLastName && !formData.userEmail && !formData.userMessage) {
      toast.warning(t('allInputsRequired'));
      return;
    }

    if (!formData.userName) {
      toast.warning(t('inputNameRequired'));
      return;
    }

    if (!formData.userLastName) {
      toast.warning(t('inputLastNameRequired'));
      return;
    }

    if (!formData.userEmail) {
      toast.warning(t('inputEmailRequired'));
      return;
    }

    if (!formData.userMessage) {
      toast.warning(t('inputMsgRequired'));
      return;
    }

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Carlos',
          from_name: `${formData.userName} ${formData.userLastName}`,
          from_email: formData.userEmail,
          to_email: 'carlosaac23@hotmail.com',
          message: formData.userMessage,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        toast.success(t('messageSent'));
        setFormData({
          userName: '',
          userLastName: '',
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
          <div className='contact-group grid grid-cols-2 gap-4'>
            <input
              title={t('inputNameHover')}
              type='text'
              name='userName'
              placeholder={t('inputName')}
              className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transition-all duration-300 ease placeholder-[#a3a3a3] placeholder:text-xs md:placeholder:text-base focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-Regular'
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              title={t('inputLastNameHover')}
              type='text'
              name='userLastName'
              placeholder={t('inputLastName')}
              className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transition-all duration-300 ease placeholder-[#a3a3a3] placeholder:text-xs md:placeholder:text-base focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-Regular'
              value={formData.userLastName}
              onChange={handleChange}
            />
          </div>
          <input
            title={t('inputEmailHover')}
            type='email'
            name='userEmail'
            placeholder={t('inputEmail')}
            className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transition-all duration-300 ease placeholder-[#a3a3a3] placeholder:text-xs md:placeholder:text-base focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-Regular'
            value={formData.userEmail}
            onChange={handleChange}
          />
          <textarea
            title={t('inputMsgHover')}
            name='userMessage'
            placeholder={t('inputMsg')}
            className='contact-input p-4 rounded-lg bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transition-all duration-300 ease placeholder-[#a3a3a3] placeholder:text-xs md:placeholder:text-base focus:outline-none focus:ring-1 focus:ring-[#ededed] text-white geistMono-Regular h-44 resize-none mb-8'
            value={formData.userMessage}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='button contact-button bg-[#0a0a0a] border border-[#27272a] hover:border-[#52525b] transitions-all duration-300 ease text-white geistMono-Bold p-5 rounded-lg cursor-pointer self-center'
          >
            {t('button')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
