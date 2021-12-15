import React from 'react'
import { Main } from './styles'
import { Formik } from 'formik'
import { initialValues } from './form-data';
import Forms from './form'
import { Container } from 'react-grid-system';
import { validationSchema } from './form-data';
import axios from 'axios'

export default function FormCG() {

    const BASE_URL = "https://api.rd.services/platform/conversions?api_key=RYwKwZxyxSHeSdkwCSZHpzTgIQzFDEAoHRXE&";


    const sendForm = (body) => {
        axios
            .post(`${BASE_URL}`, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }

    return (
        <Main style={{ backgroundColor: '#E6E6EA' }}>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        console.log(values)
                        alert('Informações enviadas com sucesso!');
                        sendForm(values);
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