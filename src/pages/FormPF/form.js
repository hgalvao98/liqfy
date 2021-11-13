import { Button, FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
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
    const { handleChange, values, errors, isSubmitting, setFieldValue } = useFormikContext();
    const history = useHistory()

    return (

        <FormCard showShadow>
            <h1>Pessoa Fisica</h1>
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
                                <TextField onChange={handleChange} value={values.cpf} error={!!errors.cpf} helperText={errors.cpf} type='text' placeholder='000.000.000-00' style={{ backgroundColor: '#F8F9FA' }} label='CPF' name='cpf' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} value={values.rg} error={!!errors.rg} helperText={errors.rg} label='RG' name='rg' type='text' placeholder='000000000' style={{ backgroundColor: '#F8F9FA' }} />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.orgaoExpedidor} error={!!errors.orgaoExpedidor} helperText={errors.orgaoExpedidor} label='Órgão Expedidor' name='orgaoExpedidor' type='text' placeholder='AAA/AA' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.nacionalidade} error={!!errors.nacionalidade} helperText={errors.nacionalidade} label='Nacionalidade' name='nacionalidade' type='text' placeholder='Pais' />
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.nascimento} error={!!errors.nascimento} helperText={errors.nascimento} label='Data de Nascimento' name='nascimento' mask='00/00/0000' type='text' placeholder='00/00/000' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth variant="filled">
                                <InputLabel>Selecione seu sexo</InputLabel>
                                <Select name='sexo' label="Age" onChange={handleChange} value={values.sexo} error={!!errors.sexo} style={{ backgroundColor: '#F8F9FA' }}>
                                    <MenuItem value='' disabled></MenuItem>
                                    <MenuItem value='M'>M</MenuItem>
                                    <MenuItem value='F'>F</MenuItem>
                                    <MenuItem value='Outro'>Outro</MenuItem>
                                    <MenuItem value='Prefiro Não Comentar'>Prefiro Não Comentar</MenuItem>
                                </Select>
                                <FormHelperText>{errors.sexo}</FormHelperText>
                            </FormControl>
                        </Box>
                    </Col>
                    <Col md={6}>
                        {!!(values.sexo === 'Outro') && <Box m={1} pt={3}> <FormControl fullWidth ><TextField style={{ backgroundColor: '#F8F9FA' }} name='outrosexo' type='text' value={values.outrosexo} error={!!errors.outrosexo} helperText={errors.outrosexo} pstyle={{ backgroundColor: '#F8F9FA' }} placeholder='Digite seu sexo' /></FormControl> </Box>}
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.naturalidade} error={!!errors.naturalidade} helperText={errors.naturalidade} label='Naturalidade' name='naturalidade' type='text' placeholder='UF e Cidade' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
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
                            <h1>Endereço</h1>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.endereco} error={!!errors.endereco} helperText={errors.endereco} label='Endereço' name='endereco' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Box m={1} pt={3}>
                            <FormControl fullWidth>
                                <TextField onChange={handleChange} style={{ backgroundColor: '#F8F9FA' }} value={values.numero} error={!!errors.numero} helperText={errors.numero} label='Numero' name='numero' type='text' placeholder='' />
                            </FormControl>
                        </Box>
                    </Col>
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
        </FormCard>



    )
}
