import React from 'react'
import { useHistory } from 'react-router-dom'
import { Main, Buttons } from './styles'
import { goToFormCG, goToFormCO } from '../../routes/coordinator'

export default function Card() {
    const history = useHistory()
    return (
        <Main>
            <h1>Qual a natureza da sua operação?</h1>
            <Buttons>
                <button onClick={() => goToFormCG(history)}>Capital de Giro</button>
                <button onClick={() => goToFormCO(history)}>Capital para Obras</button>
            </Buttons>
        </Main>
    )
}
