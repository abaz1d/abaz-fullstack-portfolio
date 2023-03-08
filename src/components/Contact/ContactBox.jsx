import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

import emailjs from "emailjs-com";

const ContactBox = () => {
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhmyh7q",
        "template_wbpqpbr",
        form.current,
        "Po8nwYiPRh31wRCkt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="dark:bg-dark sm:pt-24 sm:pb-24">
      <h5
        className="text-center text-[1em] font-medium  text-secondary dark:text-white sm:text-lg"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {t("Contact_Description")}
      </h5>
      <h2
        className="mb-12 text-center text-[2em] font-medium text-primary"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("Nav_Contact")}
      </h2>
      <div className="contact__container container">
        <div className="contact__options">
          <article
            className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
            data-aos="fade-right-down"
            data-aos-duration="900"
          >
            <MdOutlineEmail className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">Email</h4>
            <h5 className="dark:text-white">abaz.my.id@gmail.com</h5>
            <a href="mailto:abaz.my.id@gmail.com" target="_blank" rel="noreferrer">
              {t("send_message")}
            </a>
          </article>

          <article
            className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <BsLinkedin className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">LinkedIn</h4>
            <h5 className="dark:text-white">Abdul Aziz</h5>
            <a href="https://www.linkedin.com/in/abaz-id/" target="_blank" rel="noreferrer">
              {t("send_message")}
            </a>
          </article>

          <article
            className="contact__option cursor-default border-2 border-primary hover:bg-transparent dark:border-[#2c2c6c]"
            data-aos="fade-left-down"
            data-aos-duration="900"
          >
            <BsTelegram className="contact__option-icon mx-auto" />
            <h4 className="dark:text-white">Telegram</h4>
            <h5 className="dark:text-white">abaz_ID</h5>
            <a href="https://t.me/abaz_ID" target="_blank" rel="noreferrer">
              {t("send_message")}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            data-aos="fade-up"
            data-aos-duration="400"
            type="text"
            name="name"
            placeholder={t("Name_Form")}
            required
          />
          <input
            data-aos="fade-up"
            data-aos-duration="800"
            type="email"
            name="email"
            placeholder={t("Contact_Form")}
            required
          />
          <textarea
            data-aos="fade-up"
            data-aos-duration="1200"
            name="message"
            rows="7"
            placeholder={t("Desc_Form")}
            required
          ></textarea>
          <button
            data-aos="fade-down"
            data-aos-duration="1200"
            type="submit"
            className="rounded-md border-2 border-primary bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-slate-200 hover:text-primary hover:opacity-80 hover:shadow-lg hover:dark:bg-transparent"
          >
            {t("Send_Form")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactBox;
