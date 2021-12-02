import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import { Row, Col } from 'react-grid-system';
import { Form, useFormikContext } from 'formik'
import FormCard from '../../components/FormCard';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator'
import { Buttons } from './styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'


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
            <Form>
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
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.celular} error={!!errors.celular} helperText={errors.celular} label='Celular' name='celular' type='text' placeholder='(000)000000000' />
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
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.valorCapital} error={!!errors.valorCapital} helperText={errors.valorCapital} label='Valor de Capital para levantar' name='valorCapital' type='text' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth variant="filled">
                                <InputLabel>Prazo para quitar a operação</InputLabel>
                                <Select name='prazoQuitar' label="Prazo para Quitar" onChange={handleChange} value={values.prazoQuitar} error={!!errors.prazoQuitar} style={{ backgroundColor: '#F8F9FA' }}>
                                    <MenuItem value='' disabled></MenuItem>
                                    <MenuItem value='5 Anos'>5 Anos</MenuItem>
                                    <MenuItem value='10 Anos'>10 Anos</MenuItem>
                                    <MenuItem value='15 Anos'>15 Anos</MenuItem>
                                </Select>
                                <FormHelperText>{errors.prazoQuitar}</FormHelperText>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth variant="filled">
                                <InputLabel>Possui qual tipo de garantia imobiliária?</InputLabel>
                                <Select name='prazoQuitar' label="Tipo de Garantia" onChange={handleChange} value={values.prazoQuitar} error={!!errors.prazoQuitar} style={{ backgroundColor: '#F8F9FA' }}>
                                    <MenuItem value='' disabled></MenuItem>
                                    <MenuItem value='Residencial'>Residencial</MenuItem>
                                    <MenuItem value='Terreno'>Terreno</MenuItem>
                                    <MenuItem value='Industrial'>Industrial</MenuItem>
                                    <MenuItem value='Comercial'>Comercial</MenuItem>
                                    <MenuItem value='Rural'>Rural</MenuItem>
                                    <MenuItem value='Nenhuma'>Nenhuma</MenuItem>
                                </Select>
                                <FormHelperText>{errors.prazoQuitar}</FormHelperText>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.estAvaliacao} error={!!errors.estAvaliacao} helperText={errors.estAvaliacao} label='Estimativa de avaliação do imóvel' name='estAvaliacao' type='text' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth variant="filled">
                                <InputLabel>O imóvel esta regularizado e 100% quitado?</InputLabel>
                                <Select name='imovelReg' label="Age" onChange={handleChange} value={values.imovelReg} error={!!errors.imovelReg} style={{ backgroundColor: '#F8F9FA' }}>
                                    <MenuItem value='' disabled></MenuItem>
                                    <MenuItem value='Sim'>Sim</MenuItem>
                                    <MenuItem value='Não'>Não</MenuItem>
                                </Select>
                                <FormHelperText>{errors.imovelReg}</FormHelperText>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth variant="filled">
                                <InputLabel>Possui capital para quitar "entrada" ou "lance"?</InputLabel>
                                <Select name='capitalQuitar' label="Possui capital para quitar" onChange={handleChange} value={values.capitalQuitar} error={!!errors.capitalQuitar} style={{ backgroundColor: '#F8F9FA' }}>
                                    <MenuItem value='' disabled></MenuItem>
                                    <MenuItem value='Sim'>Sim</MenuItem>
                                    <MenuItem value='Não'>Não</MenuItem>
                                </Select>
                                <FormHelperText>{errors.capitalQuitar}</FormHelperText>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        {!!(values.capitalQuitar === 'Não') &&
                            <Box m={1} pt={3}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel>Possui segunda garantia imobiliária?</InputLabel>
                                    <Select name='segundaGarantia' label="Possui capital para quitar" onChange={handleChange} value={values.segundaGarantia} error={!!errors.segundaGarantia} style={{ backgroundColor: '#F8F9FA' }}>
                                        <MenuItem value='' disabled></MenuItem>
                                        <MenuItem value='Sim'>Sim</MenuItem>
                                        <MenuItem value='Não'>Não</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.segundaGarantia}</FormHelperText>
                                </FormControl>
                            </Box>}
                    </Col>
                </Row>
                <Row>
                    <Buttons>
                        <Button onClick={() => goToHome(history)} style={{ backgroundColor: '#CC0000', color: 'white' }} variant="contained" type='button'>Voltar para Pagina Principal</Button>

                        <Button style={{ backgroundColor: '#56DD27' }} variant="contained" onClick={submitForm}>{isSubmitting ? 'Loading...' : 'Enviar'}</Button>
                    </Buttons>
                </Row>
            </Form>
        </FormCard >



    )
}