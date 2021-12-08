import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    h1{
        align-self:center;
    }
`

export const Buttons = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    align-items:center;
    button{
        margin:4px;
    }
`