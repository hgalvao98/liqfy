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

const CurrencyInput1 = ({ maskOptions, ...inputProps }) => {
    const { handleChange, values, errors } = useFormikContext();

    const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
    })

    return <MaskedStyle><MaskedInput mask={currencyMask} onChange={handleChange} value={values.cf_estimativa_de_avaliacao_do_imovel} error={!!errors.cf_estimativa_de_avaliacao_do_imovel} label='Valor de Capital para levantar' name='payload.cf_estimativa_de_avaliacao_do_imovel' {...inputProps} /></MaskedStyle>
}

CurrencyInput1.defaultProps = {
    inputMode: 'numeric',
    maskOptions: {},
}

CurrencyInput1.propTypes = {
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

export default CurrencyInput1
