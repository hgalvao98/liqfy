import { Button, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { Row, Col } from 'react-grid-system';
import { Form, useFormikContext } from 'formik'
import FormCard from '../../components/FormCard';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator'
import { Buttons } from './styles'



const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFilledInput-root": {
            background: "rgb(232, 241, 250)"
        }
    }
}));
export default function Forms() {
    const classes = useStyles();
    const { handleChange, values, errors, isSubmitting } = useFormikContext();
    const history = useHistory()

    return (

        <FormCard showShadow>
            <h1>Pessoa Jurídica</h1>
            <Form>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField label='CNPJ' name='cnpj' onChange={handleChange} error={!!errors.cnpj} helperText={errors.cnpj} className={classes.root} style={{ backgroundColor: '#F8F9FA' }} />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} value={values.razao} error={!!errors.razao} helperText={errors.razao} type='text' style={{ backgroundColor: '#F8F9FA' }} label='Razão Social' name='razao' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} value={values.nome} error={!!errors.nome} helperText={errors.nome} label='Nome Fantasia' name='nome' type='text' style={{ backgroundColor: '#F8F9FA' }} />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.dataFundacao} error={!!errors.dataFundacao} helperText={errors.dataFundacao} label='Data de Fundação' name='dataFundacao' mask='00/00/0000' type='text' placeholder='00/00/000' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <h1>Endereço</h1>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.cep} error={!!errors.cep} helperText={errors.cep} label='CEP' name='cep' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.uf} error={!!errors.uf} helperText={errors.uf} label='UF' name='uf' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.numero} error={!!errors.numero} helperText={errors.numero} label='Numero' name='numero' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.logradouro} error={!!errors.logradouro} helperText={errors.logradouro} label='Logradouro' name='logradouro' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.bairro} error={!!errors.bairro} helperText={errors.bairro} label='Bairro' name='bairro' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.cidade} error={!!errors.cidade} helperText={errors.cidade} label='Cidade' name='cidade' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <h1>Sócio</h1>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField label='Nome' name='nomeSocio' onChange={handleChange} error={!!errors.nomeSocio} helperText={errors.nomeSocio} className={classes.root} style={{ backgroundColor: '#F8F9FA' }} />
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
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} value={values.cpf} error={!!errors.cpf} helperText={errors.cpf} type='text' placeholder='000.000.000-00' style={{ backgroundColor: '#F8F9FA' }} label='CPF' name='cpf' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} value={values.rg} error={!!errors.rg} helperText={errors.rg} label='RG' name='rg' type='text' placeholder='000000000' style={{ backgroundColor: '#F8F9FA' }} />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.celular} error={!!errors.celular} helperText={errors.celular} label='Celular' name='celular' type='text' placeholder='(000)000000000' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.orgaoExpedidor} error={!!errors.orgaoExpedidor} helperText={errors.orgaoExpedidor} label='Órgão Expedidor' name='orgaoExpedidor' type='text' placeholder='AAA/AA' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.nascimento} error={!!errors.nascimento} helperText={errors.nascimento} label='Data de Nascimento' name='nascimento' mask='00/00/0000' type='text' placeholder='00/00/000' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.nomemae} error={!!errors.nomemae} helperText={errors.nomemae} label='Nome da Mãe' name='nomemae' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.nomepai} error={!!errors.nomepai} helperText={errors.nomepai} label='Nome do Pai' name='nomepai' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Possui alguma restrição ou está em situação irregular?<span> *Obrigatório</span></FormLabel>
                                <RadioGroup id="restricao" type='radio' error={errors.restricao} helperText={errors.restricao} label='restricao' value={values.restricao} onChange={handleChange}>
                                    <FormControlLabel value="Sim" id='restricao1' name='restricao' control={<Radio />} label="Sim" />
                                    <FormControlLabel value="Não" id='restricao2' name='restricao' control={<Radio />} label="Não" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Conhece como funciona consórcio imobilíario?<span> *Obrigatório</span></FormLabel>
                                <RadioGroup name='conhece' label='conhece' value={values.conhece}>
                                    <FormControlLabel onChange={handleChange} control={<Radio value='true' />} label='Sim' />
                                    <FormControlLabel onChange={handleChange} control={<Radio value='false' />} label='Não' />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <FormLabel>Qual a natureza da operação?<span> *Obrigatório</span></FormLabel>
                                <RadioGroup name='natureza' label='natureza' value={values.natureza}>
                                    <FormControlLabel onChange={handleChange} control={<Radio value='co' />} label='Capital para Obras' error={!!errors.natureza} helperText={errors.natureza} />
                                    <FormControlLabel onChange={handleChange} control={<Radio value='cg' />} label='Capital de Giro' error={!!errors.natureza} helperText={errors.natureza} />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Buttons>
                        <Col md={6}>
                            <Box m={1} ml={10} pt={1}>
                                <Button onClick={() => goToHome(history)} style={{ backgroundColor: '#CC0000' }} variant="contained" type='button'>Voltar para Pagina Principal</Button>
                            </Box>
                        </Col>
                        <Col md={6}>
                            <Box m={1} ml={14} pt={1}>
                                <Button style={{ backgroundColor: '#55DE28' }} variant="contained" type='submit'>{isSubmitting ? 'Loading...' : 'Próximo'}</Button>
                            </Box>
                        </Col>
                    </Buttons>
                </Row>
            </Form>
        </FormCard >



    )
}
