import React from 'react'
import { Main } from './styles'
import { Formik } from 'formik'
import { initialValues } from './form-data';
import { validationSchema } from './form-data';
import Forms from './form'
import { Container } from 'react-grid-system';
import { goToFormCG, goToFormCO, goToFormCI, goToHome } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';


export default function FormPF() {

    const history = useHistory()

    const goToForms = values => {

        switch (values.natureza) {
            case 'cg':
                goToFormCG(history)
                break;
            case 'ci':
                goToFormCI(history)
                break;
            default:
                goToFormCO(history)
                break;

        }
    }

    const handleSubmit = (formData) => {
        console.log(formData, 'formData')
        goToForms(formData)
    }

    return (
        <Main style={{ backgroundColor: '#E6E6EA' }}>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={false}
                >
                    <Forms />
                </Formik>
            </Container>
        </Main >
    )
}
