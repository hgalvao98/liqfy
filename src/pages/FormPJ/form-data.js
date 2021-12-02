import * as Yup from 'yup'


export const initialValues = {
    cnpj: '',
    razao: '',
    nome: '',
    dataFundacao: '',
    cep: '',
    logradouro: '',
    uf: '',
    numero: '',
    bairro: '',
    cidade: '',
    email: '',
    nomeSocio: '',
    rg: '',
    telefone: '',
    nascimento: '',
    orgaoExpedidor: '',
    porcentagem: '',
    nomePai: '',
    nomeMae: '',
    restriçao: false,
    conhece: false,
    natureza: ''
}

export const validationSchema = Yup.object({
    cnpj: Yup.string()
        .required('Obrigatório')
        .min(14, 'Digite todos os numeros do seu CNPJ')
        .max(14, 'Digite todos os numeros do seu CNPJ'),
    razao: Yup.string()
        .min(3, 'Digite a Razão Social completa')
        .required('Obrigatório'),
    nome: Yup.string()
        .min(3, 'Digite seu nome completo')
        .required('Obrigatório'),
    dataFundacao: Yup.string()
        .required('Obrigatório')
        .max(8, 'Digite sua data de fundação no seguinte formato DD/MM/AAAA'),
    cep: Yup.string()
        .required('Obrigatório')
        .min(8, 'Digite todos os numeros do seu CEP')
        .max(8, 'Digite todos os numeros do seu CEP'),
    logradouro: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o logradouro completo'),
    uf: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o uf completo'),
    numero: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o numero completo'),
    cidade: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome da cidade completo'),
    bairro: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome do bairro completo'),
    email: Yup.string()
        .email('E-mail invalido'),
    nomeSocio: Yup.string()
        .min(3, 'Digite seu nome completo'),
    rg: Yup.string()
        .min(9, 'Digite todos os numeros do seu RG')
        .max(9, 'Digite todos os numeros do seu RG'),
    telefone: Yup.string()
        .min(12, 'Digite todos os numeros com DDD'),
    nascimento: Yup.string()
        .max(8, 'Digite sua data de nascimento no seguinte formato DD/MM/AAAA'),
    orgaoExpedidor: Yup.string(),
    porcentagem: Yup.string()
        .min(0, 'Digite a porcentagem correta'),
    nomemae: Yup.string()
        .min(3, 'Digite o nome completo'),
    nomepai: Yup.string()
        .min(3, 'Digite o nome completo'),
    restriçao: Yup.string(),
    conhece: Yup.string(),
    natureza: Yup.string()
        .oneOf(['Capital para Obras'], ['Capital de Giro'])
})
