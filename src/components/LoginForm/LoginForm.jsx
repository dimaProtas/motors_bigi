import React from "react";
import style from './LoginForm.module.css';
import { connect } from 'react-redux';
import { login } from '../../reducer/auth-reduser.js';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { Navigate } from "react-router-dom";


const SignupSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
});


export const LoginForm = ({login}) => {
    return (
        <Formik
            initialValues={{ login: "", password: "", rememberMe: false }}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
                // await new Promise((resolve) => setTimeout(resolve, 500));
                // alert(JSON.stringify(values, null, 2));
                login(values.login, values.password, values.rememberMe, setStatus)
                setSubmitting(false);
                
            }}
            validationSchema={SignupSchema}
        >
            {({ errors, touched, status }) => (
                <div className={style.myForm}>
                    <Form>
                        <div className={errors.login && touched.login ? style.errors : null}>
                            {errors.login && touched.login ? (
                                <div>{errors.login}</div>
                            ) : null}
                            <Field placeholder={'Login'} name={'login'} type={'input'} />
                        </div>
                        <div className={errors.password && touched.password ? style.errors : null}>
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                            <Field placeholder={'Password'} name={'password'} type={'input'} />
                        </div>
                        <div className={style.errorsServer}>{status}</div>
                        <div>
                            <Field type={'checkbox'} name={'rememberMe'} />remember me
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </Form>
                </div>

            )}
        </Formik>
    )
}

// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export const Login = ({login, isAuth}) => {

    if (isAuth === true) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <h1 className={style.login}>Login</h1>
            <LoginForm login={login} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)