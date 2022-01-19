import styled from 'styled-components'

export const Main = styled.div`
    background-color:#1E2C51;
    width:30vw;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:1em;
    h1{
        text-align:center;
        margin-top:1.4em;
        color:white !important;
        font-size:2.4vw;
    }
    @media only screen  
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    position:fixed;
    justify-self:center;
    width:80vw;
    h1{
        font-size:4.8vw;
    }
}
    
`
export const Buttons = styled.div`
    display:flex;
    flex-direction:column;
    margin:1em;
    height:12em;
    button{
        font-family: 'Roboto', sans-serif;
        font-weight:bold;
    }
    button:nth-of-type(1){
        background-color:#09CA05;
        text-decoration:none;
        border:none;
        color:black !important;
        border-radius:1em;
        height:8vh;
        width:24vw;
        margin-bottom:0.5em;
        :hover{
            background-color:darkgreen;
            color:white;
            cursor: pointer;
        }
    }
    button:nth-of-type(2){
        background-color:white;
        text-decoration:none;
        border:none;
        border-radius:1em;
        height:8vh;
        width:24vw;
        margin-bottom:0.5em;
        color:#1E2C51 !important;
        :hover{
            background-color:grey;
            color:white;
            cursor: pointer;
        }
    }
    @media only screen  
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        button:nth-of-type(1){
        background-color:#09CA05;
        text-decoration:none;
        border:none;
        border-radius:1em;
        height:8vh;
        width:48vw;
        margin-bottom:0.5em;
        :hover{
            background-color:darkgreen;
            color:white;
            cursor: pointer;
        }
    }
    button:nth-of-type(2){
        background-color:white;
        text-decoration:none;
        border:none;
        border-radius:1em;
        height:8vh;
        width:48vw;
        margin-bottom:0.5em;
        color:#1E2C51;
        :hover{
            background-color:grey;
            color:white;
            cursor: pointer;
        }
    }
    }
`