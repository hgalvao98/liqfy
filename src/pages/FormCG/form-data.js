import * as Yup from 'yup'


export const initialValues = {
    event_type: 'CONVERSION',
    event_family: 'CDP',
    payload: {
        conversion_identifier: 'formulario-cg',
        cf_qual_o_tipo_de_cadastro: '',
        cf_nome_completo: '',
        cf_celular: '',
        email: '',
        cf_valor_de_capital_para_levantar: '',
        cf_prazo_de_quitacao_anos: '',
        cf_tipogarantia: '',
        cf_estimativa_de_avaliacao_do_imovel: '',
        cf_imovelreg: '',
        cf_capitalquitar: '',
        cf_segundagarantia: '',
    },
}

export const validationSchema = Yup.object().shape({
    event_type: Yup.string(),
    event_family: Yup.string(),
    payload: Yup.object().shape({
        conversion_identifier: Yup.string(),
        cf_qual_o_tipo_de_cadastro: Yup.string()
            .required('*Obrigatório'),
        cf_nome_completo: Yup.string()
            .min(3, 'Digite seu nome completo')
            .required('*Obrigatório'),
        cf_celular: Yup.string()
            .required('*Obrigatório')
            .min(11, 'Digite todos os numeros com DDD'),
        email: Yup.string()
            .email('E-mail invalido')
            .required('*Obrigatório'),
        cf_valor_de_capital_para_levantar: Yup.number()
            .required('*Obrigatório')
            .min(1, 'Digite um valor de no minimo 1 digito'),
        cf_prazo_de_quitacao_anos: Yup.string()
            .required('*Obrigatório'),
        cf_tipogarantia: Yup.string()
            .required('*Obrigatório'),
        cf_estimativa_de_avaliacao_do_imovel: Yup.string()
            .required('*Obrigatório')
            .min(1, 'Digite um valor de no minimo 1 digito'),
        cf_imovelreg: Yup.string()
            .required('*Obrigatório'),
        cf_capitalquitar: Yup.string()
            .required('*Obrigatório'),
        cf_segundagarantia: Yup.string()
    })
})
