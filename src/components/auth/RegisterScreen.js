import { Link } from "react-router-dom"

const RegisterScreen = () => {
    return (
        <div className="login">

            <div className="login__box login__box--register">
                <h2>Registrarte</h2>
                <p>Es rápido y facil</p>

                <div className="login__separator mt-2   "></div>

                <form className="login__form">
                     <div className="login__input-field">
                        <input 
                            className="login__input login__input--register"
                            placeholder="Nombre"
                        />
                    </div>

                    <div className="login__input-field">
                        <input 
                            className="login__input login__input--register"
                            type="email"
                            placeholder="Correo electónico"
                        />
                    </div>

                    <div className="login__input-field">
                        <input 
                            className="login__input login__input--register"
                            type="password"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className="login__input-field">
                        <input 
                            className="login__input login__input--register"
                            type="email"
                            placeholder="Confirme la contraseña"
                        />
                    </div>

                    <div className="login__newuser-field">
                        <button className="btn btn--secondary block font-small">
                            Registrarte
                        </button>
                    </div>

                </form>

                <Link className="login__linkLogin" to="/auth/login"> Ya tienes una cuenta? </Link>
            </div>
            
        </div>
    )
}

export default RegisterScreen
