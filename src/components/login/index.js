import React from 'react';
import {
    useNavigate
  } from "react-router-dom";
import { useReactContext } from '../../libs/context';

function Login(props) {
    let navigate = useNavigate();
    const context = useReactContext(props.context);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password");

        const isLoginOk = await context.loginApp(username, password);
        if (isLoginOk) {
            navigate('/home', { replace: true });
        } else {
            alert('Credenciales Invalidas !')
        }
    }

    return (
        <div>
            <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius: "1rem"}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                            alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">

                            <form onSubmit={handleSubmit}>
                                <div className="d-flex align-items-center mb-3 pb-1">
                                    <img className="img-responsive" src="/media/img/logo-company.png" alt="logo company" style={{maxWidth: "30%"}}></img>
                                    {/* <span className="h1 fw-bold mb-0">Genera</span> */}
                                </div>

                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Bienvenido !</h5>

                                <div className="form-outline mb-4">
                                    <input type="text" name="username" id="txtUsername" className="form-control form-control-lg" placeholder="Email" />
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" name="password" id="txtPassword" className="form-control form-control-lg" placeholder="Password"/>
                                </div>

                                <div className="pt-1 mb-4">
                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                </div>
                            </form>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Login
