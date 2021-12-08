import React from 'react'
import { Main } from './styles'
import { Formik } from 'formik'
import { initialValues } from './form-data';
import Forms from './form'
import { Container } from 'react-grid-system';
import { validationSchema } from './form-data';


export default function FormCG() {

    return (
        <Main style={{ backgroundColor: '#E6E6EA' }}>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values)
                        alert('Informações enviadas com sucesso!');
                        resetForm();
                        setSubmitting(false);
                    }}
                    validateOnChange={false}
                >
                    <Forms />
                </Formik>
            </Container>
        </Main >
    )
}