import styled from "styled-components";

export const MaskedStyle = styled.div`
    input{
        border:none;
        border-bottom:1px solid black;
        height:40px;
        width:100%;
        outline:none;
        font-size:15px;
        :focus{
            border:none;
            border-bottom:2px solid #3F51B5;
        }
    }
`