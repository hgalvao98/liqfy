import * as Yup from 'yup'


export const initialValues = {
    nome: '',
    cpf: '',
    rg: '',
    orgaoExpeditor: '',
    nacionalidade: '',
    naturalidade: '',
    nascimento: '',
    sexo: '',
    celular: '',
    email: '',
    nomemae: '',
    nomepai: '',
}

export const validationSchema = Yup.object({
    nome: Yup.string()
        .min(3, 'Digite seu nome completo')
        .required('Obrigatório'),
    cpf: Yup.string()
        .required('Obrigatório')
        .min(11, 'Digite todos os numeros do seu CPF')
        .max(11, 'Digite todos os numeros do seu CPF'),
    rg: Yup.string()
        .required('Obrigatório')
        .min(9, 'Digite todos os numeros do seu RG')
        .max(9, 'Digite todos os numeros do seu RG'),
    orgaoExpedidor: Yup.string()
        .required('Obrigatório'),
    nacionalidade: Yup.string()
        .required('Obrigatório'),
    naturalidade: Yup.string()
        .required('Obrigatório'),
    nascimento: Yup.string()
        .required('Obrigatório')
        .max(8, 'Digite sua data de nascimento no seguinte formato DD/MM/AAAA'),
    sexo: Yup.string()
        .required('Obrigatório')
        .oneOf(['M', 'F', 'Outro', 'Prefiro Não Comentar']),
    outrosexo: Yup.string()
        .required('Obrigatório')
        .min(3),
    celular: Yup.string()
        .required('Obrigatório')
        .min(12, 'Digite todos os numeros com DDD'),
    nomemae: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome completo'),
    nomepai: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome completo'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    cep: Yup.string()
        .required('Obrigatório')
        .min(8, 'Digite todos os numeros do seu CEP')
        .max(8, 'Digite todos os numeros do seu CEP'),
    endereco: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome completo'),
    numero: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome completo'),
    uf: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome completo'),
    cidade: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome completo'),
    bairro: Yup.string()
        .required('Obrigatório')
        .min(3, 'Digite o nome completo'),
})
