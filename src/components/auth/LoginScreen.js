import { Link } from "react-router-dom"

const LoginScreen = () => {
    return (
        <div className="login">

            <div>
                <div className="login__facebook">
                    <img src="../assets/facebook.svg" alt="facebook" />
                </div>

                <div className="login__box">
                   
                    <form>
                        <div className="login__input-field">
                            <input 
                                className="login__input"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        <div className="login__input-field">
                            <input 
                                className="login__input"
                                placeholder="Contraseña"
                            />
                        </div>
                        <button className="btn btn--primary block font-medium">
                            Iniciar sesión
                        </button>
                    </form>

                    <div className="login__separator mt-3   "></div>

                    <div className="login__newuser-field">
                        <Link className="login__linkRegister" to="/auth/register" >Crear cuenta nueva</Link>
                    </div>

                    <div className="login__google mt-2">
                        <div 
                            className="google-btn  "
                        >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoginScreen
