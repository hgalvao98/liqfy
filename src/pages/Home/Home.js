import React from 'react'
import Card from '../../components/Card/Card'
import { Main } from './styles'
import piggy from '../../assets/imgs/piggy.jpg'

export default function Home() {
    return (
        <Main>
            <h2>Soluções de <span>Crédito</span> com <br /> Garantia Imobiliária</h2>
            <img src={piggy} alt="piggybank" />
            <Card />
        </Main>
    )
}
