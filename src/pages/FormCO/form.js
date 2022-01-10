import { Button, FilledInput, FormControl, FormControlLabel, FormHelperText, FormLabel, InputAdornment, InputLabel, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { Row, Col } from 'react-grid-system';
import { Form, useFormikContext, ErrorMessage } from 'formik'
import FormCard from '../../components/FormCard';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator'
import { Buttons, Message } from './styles'
import React from 'react'
import InputMask from 'react-input-mask';
import CurrencyInput from '../../CurrencyMask/CurencyInput'

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFilledInput-root": {
            background: "rgb(232, 241, 250)"
        }
    }
}));
export default function Forms() {

    const classes = useStyles();
    const { handleChange, values, errors, isSubmitting, submitForm } = useFormikContext();
    const history = useHistory()


    return (
        <FormCard showShadow>
            <h1>Capital para Obras</h1>
            <Form name="Capital para Obras">
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Qual o tipo de cadastro? <span>(*)</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='payload.cf_qual_o_tipo_de_cadastro' label='payload.cf_qual_o_tipo_de_cadastro' value={values.cf_qual_o_tipo_de_cadastro} >
                                    <FormControlLabel control={<Radio value='PF' />} label='Pessoa Física' />
                                    <FormControlLabel control={<Radio value='PJ' />} label='Pessoa Jurídica' />
                                </RadioGroup>
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_qual_o_tipo_de_cadastro' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.cf_nome_completo} error={!!errors.cf_nome_completo} className={classes.root} helperText={errors.cf_nome_completo} label='Nome Completo' name='payload.cf_nome_completo' type='text' placeholder='Nome Completo' />
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_nome_completo' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <InputMask
                                    mask={'(99)99999-9999'}
                                    value={values.cf_celular}
                                    onChange={handleChange}>
                                    {() => (
                                        <TextField
                                            variant='standard'
                                            onChange={handleChange}
                                            label='Celular'
                                            name='payload.cf_celular'
                                            error={!!errors.cf_celular}
                                            helperText={errors.cf_celular}
                                            type="text"
                                            style={{ backgroundColor: '#F8F9FA' }}
                                        />
                                    )}
                                </InputMask>
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_celular' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.email} error={!!errors.email} helperText={errors.email} label='Email' name='payload.email' type='email' placeholder='' />
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.email' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormLabel>Valor de Capital para levantar<span>(*)</span></FormLabel>
                                <CurrencyInput style={{ backgroundColor: '#F8F9FA' }} value={values.cf_valor_de_capital_para_levantar} error={!!errors.cf_valor_de_capital_para_levantar} label='Valor de Capital para levantar' name='payload.cf_valor_de_capital_para_levantar' type='text' />
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_valor_de_capital_para_levantar' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Prazo para quitar a operação <span>(*)</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='payload.cf_prazo_de_quitacao_anos' label='Prazo para quitar operação' value={values.cf_prazo_de_quitacao_anos} >
                                    <FormControlLabel control={<Radio value='5 Anos' />} label='5 Anos' />
                                    <FormControlLabel control={<Radio value='10 Anos' />} label='10 Anos' />
                                    <FormControlLabel control={<Radio value='15 Anos' />} label='15 Anos' />
                                </RadioGroup>
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_prazo_de_quitacao_anos' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Possui qual tipo de garantia imobiliária?<span>(*)</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='payload.cf_tipogarantia' label='Possui qual tipo de garantia?' value={values.cf_tipogarantia} >
                                    <FormControlLabel control={<Radio value='Residencial' />} label='Residencial' />
                                    <FormControlLabel control={<Radio value='Terreno' />} label='Terreno' />
                                    <FormControlLabel control={<Radio value='Industrial' />} label='Industrial' />
                                    <FormControlLabel control={<Radio value='Comercial' />} label='Comercial' />
                                    <FormControlLabel control={<Radio value='Rural' />} label='Rural' />
                                    <FormControlLabel control={<Radio value='Nenhuma' />} label='Nenhuma' />
                                </RadioGroup>
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_tipogarantia' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormLabel>Estimativa de avaliação do imóvel<span>(*)</span></FormLabel>
                                <CurrencyInput style={{ backgroundColor: '#F8F9FA' }} value={values.cf_estimativa_de_avaliacao_do_imovel} error={!!errors.cf_estimativa_de_avaliacao_do_imovel} label='Valor de Capital para levantar' name='payload.cf_estimativa_de_avaliacao_do_imovel' type='text' />
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_estimativa_de_avaliacao_do_imovel' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>O imóvel está regularizado e 100% quitado? <span>(*)</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='payload.cf_imovelreg' label='O imóvel esta regularizado e 100% quitado?' value={values.cf_imovelreg}  >
                                    <FormControlLabel control={<Radio value='Sim' />} label='Sim' />
                                    <FormControlLabel control={<Radio value='Não' />} label='Não' />
                                </RadioGroup>
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_imovelreg' />

                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Possui capital para quitar "entrada" ou "lance"? <span>(*)</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='payload.cf_capitalquitar' label='Possui capital para quitar "entrada" ou "lance"?' value={values.cf_capitalquitar}  >
                                    <FormControlLabel control={<Radio value='Sim' />} label='Sim' />
                                    <FormControlLabel control={<Radio value='Não' />} label='Não' />
                                </RadioGroup>
                                <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_capitalquitar' />

                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={12}>
                        {!!(values.cf_capitalquitar === 'Não') &&
                            <Box m={1} pt={3}>
                                <FormControl fullWidth>
                                    <FormLabel>Possui segunda garantia imobiliária? <span>(*)</span></FormLabel>
                                    <RadioGroup onChange={handleChange} name='payload.cf_segundagarantia' label='Possui segunda garantia imobiliária?' value={values.cf_segundagarantia}>
                                        <FormControlLabel control={<Radio value='Sim' />} label='Sim' />
                                        <FormControlLabel control={<Radio value='Não' />} label='Não' />
                                    </RadioGroup>
                                    <ErrorMessage render={msg => <Message>{msg}</Message>} name='payload.cf_segundagarantia' />
                                </FormControl>
                            </Box>}
                    </Col>
                </Row>
                <Buttons>
                    <Button onClick={() => goToHome(history)} style={{ backgroundColor: '#1E2C51', color: 'white' }} variant="contained" type='button'>Voltar para Home</Button>

                    <Button type='submit' style={{ backgroundColor: '#56DD27' }} variant="contained">{isSubmitting ? 'Loading...' : 'Enviar'}</Button>
                </Buttons>
            </Form>
        </FormCard >



    )
}