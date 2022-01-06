import React from 'react'
import { Main } from './styles'
import { Formik } from 'formik'
import { initialValues } from './form-data';
import { validationSchema } from './form-data';
import Forms from './form'
import { Container } from 'react-grid-system';
import axios from 'axios'

export default function FormCO() {

    const BASE_URL = "https://api.rd.services/platform/conversions?api_key=RYwKwZxyxSHeSdkwCSZHpzTgIQzFDEAoHRXE&";


    const sendForm = (body) => {
        axios
            .post(`${BASE_URL}`, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {

            })
            .catch((err) => {
                // alert(err.response.data.message);
            })
    }

    return (
        <Main style={{ backgroundColor: '#E6E6EA' }}>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, event) => {
                        sendForm(values);
                        event.preventDefault();
                    }}
                >
                    <Forms />
                </Formik>
            </Container>
        </Main >
    )
}