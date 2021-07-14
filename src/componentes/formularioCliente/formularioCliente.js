// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './formulario.css';

const Formulario = () => (
  <div>
    <h3>Formulario para el envio de facturacion</h3>
    <Formik
      initialValues={{ correo: '', nombre: '', telefono:'', direccion:'', regalo:'' }}
      validate={values => {
        const errors = {};
        
        if (!values.correo) {
          errors.correo = 'Requerido';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
        ) {
          errors.correo = 'Dirección de correo electrónico incorrecta';
        }
        if (!values.nombre) {
            errors.nombre = 'Requerida';
        }
        if (!values.telefono) {
            errors.telefono = 'Requerido';
        }
        if (!values.direccion) {
            errors.direccion = 'Requerido';
        }
        if (!values.regalo) {
            errors.regalo = 'Requerido';
        }
        
        return errors;
        
      }}
      
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          alert("Envio de informacion exitoso");
        }, 4000);
      }}
    >
        
      {({ isSubmitting }) => (
        <Form>
            <p>Correo Electrónico
                <Field type="email" name="correo" />
                <ErrorMessage name="correo" component="div" />
            </p>
            <p>Nombre
                <Field type="text" name="nombre"/>
                <ErrorMessage name="nombre" component="div"/>
            </p>
            <p>Numero telefonico
                <Field type="number" name="telefono"/>
                <ErrorMessage name="telefono" component="div"/>
            </p>
            <p>Dirección de envio</p>
                <Field type="textarea" name="direccion" component="textarea" rows="5" cols="50"/>
                <ErrorMessage name="direccion" component="div"/>
            <p>Es un regalo?
                <Field type="radio" name="regalo" value="si"/>Si
                <Field type="radio" name="regalo" value="no"/>No
                <ErrorMessage name="regalo" component="div"/>
            </p>
            <button class="btn" type="submit" disabled={isSubmitting}>
            Enviar Informacion
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Formulario;
