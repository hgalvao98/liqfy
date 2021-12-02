import * as Yup from 'yup'


export const initialValues = {
    nome: '',
    celular: '',
    email: '',
    valorCapital: '',
    prazoQuitar: '',
    tipoGarantia: '',
    estAvaliacao: '',
    imovelReg: '',
    capitalQuitar: '',
    segundaGarantia: ''
}

export const validationSchema = Yup.object().shape({
    nome: Yup.string()
        .min(3, 'Digite seu nome completo')
        .required('Obrigatório'),
    celular: Yup.string()
        .required('Obrigatório')
        .min(12, 'Digite todos os numeros com DDD'),
    email: Yup.string()
        .email('E-mail invalido')
        .required('Required'),
    valorCapital: Yup.string()
        .required('Obrigatório')
        .min(1, 'Digite um valor de no minimo 1 digito'),
    prazoQuitar: Yup.string()
        .required('Obrigatório')
        .oneOf(['5 Anos'], ['10 Anos'], ['15 Anos']),
    tipoGarantia: Yup.string()
        .required('Obrigatório')
        .oneOf(['Residencial'], ['Terreno'], ['Industrial'], ['Comercial'], ['Rural'], ['Nenhuma']),
    estAvaliacao: Yup.string()
        .required('Obrigatório')
        .min(1, 'Digite um valor de no minimo 1 digito'),
    imovelReg: Yup.string()
        .required('Obrigatório')
        .oneOf(['Sim'], ['Não']),
    capitalQuitar: Yup.string()
        .required('Obrigatório')
        .oneOf(['Sim'], ['Não']),
    segundaGarantia: Yup.string()
        .required('Obrigatório')
        .oneOf(['Sim'], ['Não']),
})
