import React from 'react'
import { Main, Logo } from './styles'
import LiqfyWhiteOnBlue from '../../assets/imgs/Liqfy1.jpeg'
import { goToHome } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

export default function Header() {

    const history = useHistory()

    return (
        <Main>
            <Logo onClick={() => goToHome(history)}>
                <img src={LiqfyWhiteOnBlue} alt="Logo Liqfy" />
            </Logo>
        </Main>
    )
}
