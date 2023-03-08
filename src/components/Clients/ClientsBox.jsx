import React from "react";
import { Trans, useTranslation } from "react-i18next";
import lurikrachmad from "@/assets/images/clients/lurikrachmad.svg";
import birookk from "@/assets/images/clients/birookk.svg";
import binaniaga from "@/assets/images/clients/binaniaga.webp";
import anlimitid from "@/assets/images/clients/anlimitid.webp";
import abadan from "@/assets/images/clients/abadan.webp";

const ClientsBox = () => {
  const { t } = useTranslation();
  return (
    <section
      className="bg-slate-300 pt-36 pb-36 dark:bg-slate-900"
      id="clients"
    >
      {/* <!-- CLIENTS --> */}
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h5
              className="mb-2 text-[1em] font-semibold text-primary sm:text-lg"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {t("Clients_SubTitle")}
            </h5>
            <h2
              className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              {t("Nav_Clients")}
            </h2>
            <p
              className="text-md font-medium text-slate-600 dark:text-slate-400 md:text-lg"
              data-aos="fade-zoom-in"
              data-aos-duration="1200"
            >
              <Trans components={{ i: <i /> }}>
                {t("Clients_Description")}
              </Trans>
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="http://153.92.210.7:83/"
              target={"_blank"}
              className="group relative mx-4 flex max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              data-aos="fade-up"
              data-aos-duration="1800"
              rel="noreferrer"
            >
              <img src={abadan} alt="abadan" loading="lazy" />
              <span
                className="absolute left-1/2 -top-32 m-4 mx-auto w-full -translate-x-1/2 translate-y-full rounded-md bg-dark p-2 
    text-center text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-primary"
              >
                Abadan Land Arrangement
              </span>
            </a>
            <a
              href="https://www.senkom.or.id/"
              target={"_blank"}
              className="group relative mx-4 flex max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              data-aos="fade-up"
              data-aos-duration="1200"
              rel="noreferrer"
            >
              <img src={birookk} alt="birookk" loading="lazy" />
              <span
                className="absolute left-1/2 -top-32 m-4 mx-auto w-full -translate-x-1/2 translate-y-full rounded-md bg-dark p-2 
    text-center text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-primary"
              >
                OKK Prov. Jawa Tengah
              </span>
            </a>

            <a
              href="http://153.92.210.7:3003/"
              target={"_blank"}
              className="group relative mx-4 flex max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              data-aos="flip-down"
              data-aos-duration="600"
              rel="noreferrer"
            >
              <img src={anlimitid} alt="anlimitid" loading="lazy" />
              <span
                className="absolute left-1/2 -top-20 m-4 mx-auto w-full -translate-x-1/2 translate-y-full rounded-md bg-dark p-2 
    text-center text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-primary"
              >
                Anlimitid Tech
              </span>
            </a>
            <a
              href="https://lurikrachmad.co.id/"
              target={"_blank"}
              className="group relative mx-4 flex max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              data-aos="fade-down"
              data-aos-duration="1200"
              rel="noreferrer"
            >
              <img src={lurikrachmad} alt="lurikrachmad" loading="lazy" />
              <span
                className="absolute left-1/2 -top-20 m-4 mx-auto w-full -translate-x-1/2 translate-y-full rounded-md bg-dark p-2 
    text-center text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-primary"
              >
                Lurik Rachmad
              </span>
            </a>
            <a
              href="https://sikopi.patikab.go.id/index.php?rute=user&id=1124"
              target={"_blank"}
              className="group relative mx-4 flex max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              data-aos="fade-down"
              data-aos-duration="1800"
              rel="noreferrer"
            >
              <img src={binaniaga} alt="binaniaga" loading="lazy" />
              <span
                className="absolute left-1/2 -top-32 m-4 mx-auto w-full -translate-x-1/2 translate-y-full rounded-md bg-dark p-2 
    text-center text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-primary"
              >
                KSP Bina Niaga
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- /CLIENTS --> */}
    </section>
  );
};

export default ClientsBox;
