import Card from 'antd/es/card/Card'
import { Field, Form, Formik } from 'formik'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import './LoginPage.css'

const LoginPage = () => {

    const dispatch = useDispatch()

    const form = useRef()

    const initialValues = {
        email: '',
        pass: ''
    }

    const submit = () => {
        dispatch(checkingAuthentication())
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <div className='container'>

            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Logotipo_de_la_Universidad_Nacional_de_Colombia.svg" alt="Logo UNAL" />
                <h1 className='title'>Bienvenido de nuevo</h1>
                <p className="subtitle">Inicia sesión para continuar</p>
            </div>

            <Card
                actions={
                    [
                        <div>
                            <button
                                type='submit'
                                onClick={() => {
                                    form.current.submitForm()
                                    console.log(form.current.values)
                                }}
                            >
                                <i className="fa-solid fa-right-to-bracket"></i> Iniciar sesión
                            </button>
                            <button
                                onClick={() => onGoogleSignIn()}
                            >
                                <i className="fa-brands fa-google"></i> Entrar con Google
                            </button>
                        </div>
                    ]
                }
            >
                <Formik
                    initialValues={initialValues}
                    innerRef={form}
                    onSubmit={submit}
                >
                    <Form>
                        <div className='form-group'>
                            <div className="form-label">
                                <i className="fa-regular fa-envelope"></i>
                                <label>Correo electrónico</label>
                            </div>
                            <Field name="email" type='email' />
                        </div>
                        <div className='form-group'>
                            <div className="form-label">
                                <i className="fa-solid fa-lock"></i>
                                <label>Contraseña</label>
                            </div>
                            <Field name="pass" type='password' />
                        </div>
                    </Form>
                </Formik>
            </Card>
        </div>
    )
}

export default LoginPage