import { Button, FilledInput, FormControl, FormControlLabel, FormHelperText, FormLabel, InputAdornment, InputLabel, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { Row, Col } from 'react-grid-system';
import { useFormikContext } from 'formik'
import FormCard from '../../components/FormCard';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator'
import { Buttons } from './styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Cancel } from '@material-ui/icons';
import React, { useEffect } from 'react'
import InputMask from 'react-input-mask'

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
    history.go(0)
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/6ccdd732-68a0-4d25-813b-7deaccad57fe-loader.js";
        script.async = true;
        document.body.appendChild(script)
    }, [])

    return (

        <FormCard showShadow>
            <h1>Capital para Obras</h1>
            <form name="Capital para Obras">
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Qual o tipo de cadastro? <span> *Obrigatório</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='cadastro' label='Qual o tipo de cadastro? ' value={values.cadastro} error={errors.cadastro} >
                                    <FormControlLabel control={<Radio value='Pessoa Física' />} label='Pessoa Física' />
                                    <FormControlLabel control={<Radio value='Pessoa Jurídica' />} label='Pessoa Jurídica' />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField label='Nome' name='nome' onChange={handleChange} error={!!errors.nome} helperText={errors.nome} className={classes.root} style={{ backgroundColor: '#F8F9FA' }} />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <InputMask
                                    mask={'(99)99999-9999'}
                                    value={values.celular}
                                    onChange={handleChange}>
                                    {() => (
                                        <TextField
                                            variant='standard'
                                            onChange={handleChange}
                                            label='Celular'
                                            name='celular'
                                            error={!!errors.celular}
                                            helperText={errors.celular}
                                            type="text"
                                            style={{ backgroundColor: '#F8F9FA' }}
                                        />
                                    )}
                                </InputMask>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.email} error={!!errors.email} helperText={errors.email} label='Email' name='email' type='email' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount">Valor de capital para levantar</InputLabel>
                                <FilledInput startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    id="filled-adornment-amount" onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.valorCapital} error={!!errors.valorCapital} label='Valor de Capital para levantar' name='valorCapital' type='text' />
                                <FormHelperText>{errors.valorCapital}</FormHelperText>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Prazo para quitar a operação <span> *Obrigatório</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='prazoQuitar' label='Prazo para quitar operação' value={values.prazoQuitar} error={errors.prazoQuitar} >
                                    <FormControlLabel control={<Radio value='5 Anos' />} label='5 Anos' />
                                    <FormControlLabel control={<Radio value='10 Anos' />} label='10 Anos' />
                                    <FormControlLabel control={<Radio value='15 Anos' />} label='15 Anos' />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Possui qual tipo de garantia imobiliária?<span> *Obrigatório</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='tipoGarantia' label='Possui qual tipo de garantia?' value={values.tipoGarantia} error={errors.tipoGarantia} >
                                    <FormControlLabel control={<Radio value='Residencial' />} label='Residencial' />
                                    <FormControlLabel control={<Radio value='Terreno' />} label='Terreno' />
                                    <FormControlLabel control={<Radio value='Industrial' />} label='Industrial' />
                                    <FormControlLabel control={<Radio value='Comercial' />} label='Comercial' />
                                    <FormControlLabel control={<Radio value='Rural' />} label='Rural' />
                                    <FormControlLabel control={<Radio value='Nenhuma' />} label='Nenhuma' />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount">Estimativa de avaliação do imóvel</InputLabel>
                                <FilledInput startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    id="filled-adornment-amount" onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.estAvaliacao} error={!!errors.estAvaliacao} label='Valor de Capital para levantar' name='estAvaliacao' type='text' />
                                <FormHelperText>{errors.estAvaliacao}</FormHelperText>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>O imóvel esta regularizado e 100% quitado? <span> *Obrigatório</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='imovelReg' label='O imóvel esta regularizado e 100% quitado?' value={values.imovelReg} error={errors.imovelReg} >
                                    <FormControlLabel control={<Radio value='Sim' />} label='Sim' />
                                    <FormControlLabel control={<Radio value='Não' />} label='Não' />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Possui capital para quitar "entrada" ou "lance"? <span> *Obrigatório</span></FormLabel>
                                <RadioGroup onChange={handleChange} name='capitalQuitar' label='Possui capital para quitar "entrada" ou "lance"?' value={values.capitalQuitar} error={errors.capitalQuitar} >
                                    <FormControlLabel control={<Radio value='Sim' />} label='Sim' />
                                    <FormControlLabel control={<Radio value='Não' />} label='Não' />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        {!!(values.capitalQuitar === 'Não') &&
                            <Box m={1} pt={3}>
                                <FormControl fullWidth>
                                    <FormLabel>Possui segunda garantia imobiliária? <span> *Obrigatório</span></FormLabel>
                                    <RadioGroup onChange={handleChange} name='segundaGarantia' label='Possui segunda garantia imobiliária?' value={values.segundaGarantia} error={errors.segundaGarantia} >
                                        <FormControlLabel control={<Radio value='Sim' />} label='Sim' />
                                        <FormControlLabel control={<Radio value='Não' />} label='Não' />
                                    </RadioGroup>
                                </FormControl>
                            </Box>}
                    </Col>
                </Row>
                <Buttons>
                    <Button onClick={() => goToHome(history)} style={{ backgroundColor: '#CC0000', color: 'white' }} variant="contained" type='button'> <Cancel /></Button>

                    <Button type='submit' style={{ backgroundColor: '#56DD27' }} variant="contained" onClick={submitForm}>{isSubmitting ? 'Loading...' : <ArrowForwardIcon />}</Button>
                </Buttons>
            </form>
        </FormCard >



    )
}