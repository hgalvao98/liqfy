import React from 'react'
import { Main } from './styles'
import { Formik } from 'formik'
import { initialValues } from './form-data';
import { validationSchema } from './form-data';
import Forms from './form'
import { Container } from 'react-grid-system';
import axios from 'axios'
import { goToSuccessPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

export default function FormCO() {

    const BASE_URL = "https://api.rd.services/platform/conversions?api_key=RYwKwZxyxSHeSdkwCSZHpzTgIQzFDEAoHRXE&";

    const history = useHistory()

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
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        sendForm(values);
                        setSubmitting(false);
                        goToSuccessPage(history);
                    }}
                >
                    <Forms />
                </Formik>
            </Container>
        </Main >
    )
}