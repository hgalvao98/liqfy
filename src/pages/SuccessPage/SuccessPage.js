import React from 'react'
import Card from '../../components/Card/Card'
import { Main, Items, Button } from './styles'
import piggy from '../../assets/imgs/piggy.png'
import HomeIcon from '@material-ui/icons/Home'
import { goToHome } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import checkmark from '../../assets/imgs/checkmark.png'

export default function SuccessPage() {
    const history = useHistory()
    return (
        <Main>
            <img src={checkmark} />
            <Items>
                <h1>Obrigado!</h1>
                <h2>Seu formulario enviado com <span>sucesso!</span></h2>
            </Items>
            <Button onClick={() => goToHome(history)}>
                <HomeIcon style={{ fill: "white" }} />
                <p>Pagina principal</p>
            </Button>
        </Main>
    )
}
