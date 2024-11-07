"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

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
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
  };

  const onSubmit = (values: FormValues) => {
    console.log("Debe enviar un mail conlos datos: ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      validateOnChange
    >
      {({ isSubmitting }) => (
        <Form className="w-full h-full flex flex-col justify-center items-start gap-10">
          <div className="w-full">
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full bg-transparent text-lg py-3 border-b-[1px] border-b-[#D9D9D94D]"
              placeholder="Nombre"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>
          <div className="w-full">
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full bg-transparent text-lg py-3 border-b-[1px] border-b-[#D9D9D94D]"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>
          <div className="w-full">
            <Field
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-transparent text-lg py-3 border-b-[1px] border-b-[#D9D9D94D]"
              placeholder="Celular"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-8 mt-6 text-[#CAC4D0] bg-[#d9d9d927] border-[1px] border-[#E6E0E9]"
            disabled={isSubmitting}
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}
