import React from 'react'
import { useHistory } from 'react-router-dom'
import { Main, Buttons } from './styles'
import { goToFormPJ } from '../../routes/coordinator'
import { goToFormPF } from '../../routes/coordinator'

export default function Card() {

    const history = useHistory()

    return (
        <Main>
            <h1>Qual tipo de crédito você precisa?</h1>
            <Buttons>
                <button onClick={()=>goToFormPJ(history)}>Crédito para Pessoa Jurídica</button>
                <button onClick={()=>goToFormPF(history)}>Crédito para Pessoa Física</button>
            </Buttons>
        </Main>
    )
}
