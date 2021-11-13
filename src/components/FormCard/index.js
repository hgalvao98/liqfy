import React from 'react';

import { CardContainer } from './styles';


const FormCard = ({ children, style, showShadow }) => {
    return (
        <CardContainer style={style} showShadow={showShadow}>
            {children}
        </CardContainer>
    );
};

export default FormCard;
