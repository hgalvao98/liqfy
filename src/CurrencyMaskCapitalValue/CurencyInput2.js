/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import { createNumberMask } from 'text-mask-addons'
import { MaskedStyle } from './styles'
import { useFormikContext } from 'formik'


const defaultMaskOptions = {
    prefix: 'R$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 9, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
}

const CurrencyInput2 = ({ maskOptions, ...inputProps }) => {
    const { handleChange, values, errors } = useFormikContext();

    const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
    })

    return <MaskedStyle><MaskedInput mask={currencyMask} onChange={handleChange} value={values.cf_valor_de_capital_para_levantar} error={!!errors.cf_valor_de_capital_para_levantar} label='Valor de Capital para levantar' name='payload.cf_valor_de_capital_para_levantar' {...inputProps} /></MaskedStyle>
}

CurrencyInput2.defaultProps = {
    inputMode: 'numeric',
    maskOptions: {},
}

CurrencyInput2.propTypes = {
    inputmode: PropTypes.string,
    maskOptions: PropTypes.shape({
        prefix: PropTypes.string,
        suffix: PropTypes.string,
        includeThousandsSeparator: PropTypes.boolean,
        thousandsSeparatorSymbol: PropTypes.string,
        allowDecimal: PropTypes.boolean,
        decimalSymbol: PropTypes.string,
        decimalLimit: PropTypes.string,
        requireDecimal: PropTypes.boolean,
        allowNegative: PropTypes.boolean,
        allowLeadingZeroes: PropTypes.boolean,
        integerLimit: PropTypes.number,
    }),
}

export default CurrencyInput2
