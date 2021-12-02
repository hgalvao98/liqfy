import styled from 'styled-components';


export const CardContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width:fit-content;

    ${({ showShadow }) => showShadow && 'box-shadow: 2px  0 8px rgb(0,0,0,.5)'};

    background-color: white;
    border:2px solid #09CA05;
    border-radius:8px;
    margin:2em 0 2em 0;
    padding:1em;
    h1{
        margin-bottom:0.2em;
    }
`;
