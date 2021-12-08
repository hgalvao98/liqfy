import * as Yup from 'yup'


export const initialValues = {
    cadastro: '',
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
    cadastro: Yup.string()
        .required('Obrigatório'),
    nome: Yup.string()
        .min(3, 'Digite seu nome completo')
        .required('Obrigatório'),
    celular: Yup.string()
        .required('Obrigatório')
        .min(11, 'Digite todos os numeros com DDD'),
    email: Yup.string()
        .email('E-mail invalido')
        .required('Required'),
    valorCapital: Yup.string()
        .required('Obrigatório')
        .min(1, 'Digite um valor de no minimo 1 digito'),
    prazoQuitar: Yup.string()
        .required('Obrigatório'),
    tipoGarantia: Yup.string()
        .required('Obrigatório'),
    estAvaliacao: Yup.string()
        .required('Obrigatório')
        .min(1, 'Digite um valor de no minimo 1 digito'),
    imovelReg: Yup.string()
        .required('Obrigatório'),
    capitalQuitar: Yup.string()
        .required('Obrigatório'),
    segundaGarantia: Yup.string()
})

