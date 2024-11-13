"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import infoIcon from "@/assets/images/contact/info.svg";
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
    .email("Email incorrecto, por favor vuelva a intentar")
    .required("Debes ingresar un email")
    .min(6, "Email incorrecto, por favor vuelva a intentar"),
  phone: Yup.string()
    .matches(
      /^[0-9]+$/,
      "El número ingresado es incorrecto, por favor vuelva a intentar"
    )
    .required("Debes ingresar tu celular")
    .min(8, "El número ingresado es incorrecto, por favor vuelva a intentar"),
});

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
  };

  const onChange = (values: FormValues) => {
    const errors: { [key: string]: string } = {};

    if (!validationSchema.isValidSync(values)) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }

    return errors;
  };

  const onSubmit = async (values: FormValues, { resetForm }: any) => {
    if (canSubmit) {
      try {
        if (!serviceId || !templateId || !userId) throw new Error();
        await emailjs.send(serviceId, templateId, { ...values }, userId);

        resetForm();
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 3000);
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange
      validate={onChange}
    >
      {({ isSubmitting }) => (
        <Form className="w-full h-full flex flex-col justify-center items-start gap-5 roboto-flex text-sm">
          <div className="w-full gap-3 flex flex-col justify-start items-start min-h-[77px]">
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full bg-transparent py-3 form-input-border text-[#D9D9D9] placeholder:text-[#D9D9D9B2] focus:outline-none focus:form-input-border"
              placeholder="Nombre"
            />
            <ErrorMessage
              name="name"
              render={(msg) => (
                <div className="flex flex-row md:relative text-blue gap-2">
                 {/*  <Image
                    src={infoIcon.src}
                    className="block md:absolute md:-left-6 md:top-0.5"
                    alt="Error en formulario"
                    width={16}
                    height={16}
                  /> */}
                   <img
                    src={infoIcon.src}
                    className="block md:absolute md:-left-6 md:top-0.5 w-4 h-4"
                    alt="Error en formulario"
                  />
                  <span>{msg}</span>
                </div>
              )}
            />
          </div>
          <div className="w-full gap-3 flex flex-col justify-start items-start min-h-[77px]">
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent py-3 form-input-border text-[#D9D9D9] placeholder:text-[#D9D9D9B2] focus:outline-none focus:form-input-border"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              render={(msg) => (
                <div className="flex flex-row md:relative text-blue text-xs gap-2">
                 {/*  <Image
                    src={infoIcon.src}
                    className="block md:absolute md:-left-6 md:top-0.5"
                    alt="Error en formulario"
                    width={16}
                    height={16}
                  /> */}
                   <img
                    src={infoIcon.src}
                    className="block md:absolute md:-left-6 md:top-0.5 w-4 h-4"
                    alt="Error en formulario"
                  />
                  <span>{msg}</span>
                </div>
              )}
            />
          </div>
          <div className="w-full gap-3 flex flex-col justify-start items-start min-h-[77px]">
            <Field
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-transparent py-3 form-input-border text-[#D9D9D9] placeholder:text-[#D9D9D9B2] focus:outline-none focus:form-input-border"
              placeholder="Celular"
            />
            <ErrorMessage
              name="phone"
              render={(msg) => (
                <div className="flex flex-row md:relative text-blue text-xs gap-2">
                  {/* <Image
                    src={infoIcon.src}
                    className="block md:absolute md:-left-6 md:top-0.5"
                    alt="Error en formulario"
                    width={16}
                    height={16}
                  /> */}
                  <img
                    src={infoIcon.src}
                    className="block md:absolute md:-left-6 md:top-0.5 w-4 h-4"
                    alt="Error en formulario"
                  />
                  <span>{msg}</span>
                </div>
              )}
            />
          </div>
          <button
            type="submit"
            className={`py-2 px-6 mt-6 transition-colors duration-300 ${
              isSubmitting ? "bg-[#d9d9d927]" : "bg-red"
            } border-[1px] ${
              canSubmit
                ? "border-lightBlue text-lightBlue hover:cursor-pointer"
                : "border-[#E6E0E9] text-[#E6E0E9] hover:cursor-not-allowed"
            } text-base`}
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
