import Card from 'antd/es/card/Card'
import { Field, Form, Formik } from 'formik'
import React, { useRef } from 'react'
import './LoginPage.css'

const LoginPage = () => {

    const form = useRef()

    const initialValues = {
        email: '',
        pass: ''
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
                                Iniciar sesión
                            </button>
                        </div>
                    ]
                }
            >
                <Formik
                    initialValues={initialValues}
                    innerRef={form}
                    onSubmit={() => { }}
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