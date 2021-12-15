import styled from 'styled-components'

export const Items = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:10vh;
    img{
        height:30vh;
        margin-left:4em;
    }
    h2{
        font-weight:bolder;
        text-align:center;
        font-size:2.4vw;
        color:#1E2C51;
        span{
            color:#09CA05;
        }
    }
    @media only screen  
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        img, h2{
            display:none;
        }
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:10vh;
    
}
`

export const Main = styled.div`
    display:grid !important;
    grid-gap:12em;
    grid-template-columns:1fr 1fr;
    margin-top:8em;
    @media only screen  
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    img, h2{
        display:none;
    }
    display:flex !important;
    margin-top:12em;
    justify-content:center;
    align-items:center;
}
`


