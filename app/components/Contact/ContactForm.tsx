"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import infoIcon from "@/assets/images/contact/info.svg";
import Image from "next/image";
import emailjs from "emailjs-com";

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAIL_USER_ID;

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios")
    .required("Debes ingresar tu nombre"),
  email: Yup.string()
    .email("El email debe tener un formato válido")
    .required("Debes ingresar un email"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "El celular solo puede contener números")
    .required("Debes ingresar tu celular"),
});

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState(false);

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
  };

  const onSubmit = async (values: FormValues, { resetForm }: any) => {
    try {
      if (!serviceId || !templateId || !userId) throw new Error();
      await emailjs.send(serviceId, templateId, { ...values }, userId);

      resetForm();
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange
    >
      {({ isSubmitting }) => (
        <Form className="w-full h-full flex flex-col justify-center items-start gap-10">
          <div className="w-full gap-3 flex flex-col justify-start items-start min-h-[85px]">
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full bg-transparent text-lg py-3 border-b-[1px] border-b-[#D9D9D94D] text-[#D9D9D9] placeholder:text-[#D9D9D9B2]"
              placeholder="Nombre"
            />
            <ErrorMessage
              name="name"
              render={(msg) => (
                <div className="relative text-blue text-sm">
                  <Image
                    src={infoIcon.src}
                    className="absolute -left-6 top-0.5"
                    alt="Error en formulario"
                    width={16}
                    height={16}
                  />
                  <span>{msg}</span>
                </div>
              )}
            />
          </div>
          <div className="w-full gap-3 flex flex-col justify-start items-start min-h-[85px]">
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent text-lg py-3 border-b-[1px] border-b-[#D9D9D94D] text-[#D9D9D9] placeholder:text-[#D9D9D9B2]"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              render={(msg) => (
                <div className="relative text-blue text-sm">
                  <Image
                    src={infoIcon.src}
                    className="absolute -left-6 top-0.5"
                    alt="Error en formulario"
                    width={16}
                    height={16}
                  />
                  <span>{msg}</span>
                </div>
              )}
            />
          </div>
          <div className="w-full gap-3 flex flex-col justify-start items-start min-h-[85px]">
            <Field
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-transparent text-lg py-3 border-b-[1px] border-b-[#D9D9D94D] text-[#D9D9D9] placeholder:text-[#D9D9D9B2]"
              placeholder="Celular"
            />
            <ErrorMessage
              name="phone"
              render={(msg) => (
                <div className="relative text-blue text-sm">
                  <Image
                    src={infoIcon.src}
                    className="absolute -left-6 top-0.5"
                    alt="Error en formulario"
                    width={16}
                    height={16}
                  />
                  <span>{msg}</span>
                </div>
              )}
            />
          </div>
          <button
            type="submit"
            className={`py-3 px-8 mt-6 ${
              isSubmitting ? "bg-[#d9d9d927]" : "bg-grey"
            } border-[1px] border-[#E6E0E9]`}
            disabled={isSubmitting}
          >
            Enviar
          </button>
          <div
            className={`absolute bottom-10 transition-all duration-500]
 ${!successMessage ? "translate-y-0 opacity-0" : "-translate-y-1 opacity-100"}`}
          >
            <p className="text-green-500">¡Mensaje enviado!</p>
          </div>
        </Form>
      )}
    </Formik>
  );
}
