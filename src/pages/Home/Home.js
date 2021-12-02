import React from 'react'
import Card from '../../components/Card/Card'
import { Main, Items } from './styles'
import piggy from '../../assets/imgs/piggy.png'

export default function Home() {
    return (
        <Main>
            <Items>
                <h2>Soluções de <span>Crédito</span> com <br /> Garantia Imobiliária</h2>
                <img src={piggy} alt="piggybank" />
            </Items>
            <Card />
        </Main>
    )
}
