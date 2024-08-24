import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

interface EmailResponse {
  name: string;
}

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
      toast.error(t('allInputsRequired'));
      return;
    }

    if (!formData.userName) {
      toast.warning(t('inputNameRequired'));
      return;
    }

    if (formData.userName.length < 3) {
      toast.error(t('inputNameLength'));
      return;
    }

    if (!formData.userLastName) {
      toast.warning(t('inputLastNameRequired'));
      return;
    }

    if (formData.userLastName.length < 3) {
      toast.error(t('inputLastNameLength'));
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

    if (formData.userMessage.length < 10) {
      toast.error(t('inputMsgLength'));
      return;
    }

    const sendEmailPromise = (): Promise<EmailResponse> =>
      new Promise(async (resolve, reject) => {
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
            resolve({ name: 'Sonner' });
          } else {
            reject(new Error('Failed to send message'));
          }
        } catch (error) {
          reject(error);
        }
      });

    toast.promise(sendEmailPromise(), {
      loading: t('sendingPromise'),
      success: t('messageSent'),
      error: t('messageNotSent'),
    });

    setFormData({
      userName: '',
      userLastName: '',
      userEmail: '',
      userMessage: '',
    });
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='text-2xl geistMono-Bold text-[#fafafa] mb-10'>{t('contactTitle')}</h2>
      <div className='contact-container container grid max-sm:justify-center'>
        <form className='contact-form grid gap-4' onSubmit={handleSubmit}>
          <div className='contact-group grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
            <input
              autoFocus
              title={t('inputNameHover')}
              type='text'
              name='userName'
              placeholder={t('inputName')}
              className='contact-input p-4 rounded-md bg-[#111111] border border-[#262626] hover:border-[#5a5a5a] transition-all duration-300 ease placeholder-[#737373] focus:outline-none focus:ring-1 focus:ring-[#d4d4d4] text-[#fafafa] geistMono-Regular max-sm:w-80'
              value={formData.userName}
              onChange={handleChange}
            />

            <input
              title={t('inputLastNameHover')}
              type='text'
              name='userLastName'
              placeholder={t('inputLastName')}
              className='contact-input p-4 rounded-md bg-[#111111] border border-[#262626] hover:border-[#5a5a5a] transition-all duration-300 ease placeholder-[#737373] focus:outline-none focus:ring-1 focus:ring-[#d4d4d4] text-[#fafafa] geistMono-Regular max-sm:w-80'
              value={formData.userLastName}
              onChange={handleChange}
            />
          </div>

          <input
            title={t('inputEmailHover')}
            type='email'
            name='userEmail'
            placeholder={t('inputEmail')}
            className='contact-input p-4 rounded-md bg-[#111111] border border-[#262626] hover:border-[#5a5a5a] transition-all duration-300 ease placeholder-[#737373] focus:outline-none focus:ring-1 focus:ring-[#d4d4d4] text-[#fafafa] geistMono-Regular max-sm:w-80'
            value={formData.userEmail}
            onChange={handleChange}
          />

          <textarea
            title={t('inputMsgHover')}
            name='userMessage'
            placeholder={t('inputMsg')}
            className='contact-input p-4 rounded-md bg-[#111111] border border-[#262626] hover:border-[#5a5a5a] transition-all duration-300 ease placeholder-[#737373] focus:outline-none focus:ring-1 focus:ring-[#d4d4d4] text-[#fafafa] geistMono-Regular h-48 resize-none'
            value={formData.userMessage}
            onChange={handleChange}
          />

          <div className='flex justify-end max-sm:justify-center'>
            <button
              title={t('buttonHover')}
              type='submit'
              className='bg-[#e5e5e5] hover:bg-[#a3a3a3] transition-all duration-300 ease w-52 h-12 text-[#0a0a0a] geistMono-Bold rounded-md cursor-pointer max-sm:w-full'
            >
              {t('button')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
