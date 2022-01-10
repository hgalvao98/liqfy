import styled from 'styled-components'

export const Items = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h2{
        font-size:3em;
        align-self:center;
        margin-top:-.3em;
    }
    span{
       color:#09CA05;
   }
   @media only screen  
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        h2{
            text-align:center;
        }
    }
`

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:2em;
    img{
        width:20em;
    }
    @media only screen  
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    margin-top:6em;

        img{
            width:15em;
        }
        h1{
            font-size:1.3em;
        }
        h2{
            font-size:2em;
        }
    }
`
export const Button = styled.button`
    background-color:#09CA05;
    display:flex;
    flex-direction:row;
    align-items:center;
    outline:none;
    border:none;
    border-radius:1em;
    padding-left:.3em;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    p{
        font-family: 'Roboto';
        margin:.8em;  
        color:white;      
    }
    :hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            cursor:pointer;
        
    }
`


