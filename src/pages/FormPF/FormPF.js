import React from 'react'
import { Main } from './styles'
import { Formik } from 'formik'
import { initialValues } from './form-data';
import { validationSchema } from './form-data';
import Forms from './form'
import { Container } from 'react-grid-system';


export default function FormPF() {
    return (
        <Main style={{ backgroundColor: '#E6E6EA' }}>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            resetForm();
                            setSubmitting(false);
                        }, 3000)
                    }}
                >
                    <Forms />
                </Formik>
            </Container>
        </Main>
    )
}
