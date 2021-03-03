import './body.scss';


function CardLogin() {
    return(
        <div className="bg_cont_card">
            <div className="campo_title">
                
                <h1 className="title">Inicia seción</h1>
            </div>
            <div className="cont_email_password">
                <div className="box_email">


                    <input type="email" name="email" id="" className="campos"   />
                    <label htmlFor="" className="placeholder">Email o numero de telefono</label>
                </div>
                
                <div className="box_password">

                    <input type="password" name="password" id="" className="campos" />
                    <label htmlFor="" className="placeholder2">Contraseña</label>
                </div>


            </div>
            <button type="submit" className="submit title"><h1 className="h1">Iniciar sesión</h1></button>
            <div className="cont_checkbox">
                <input type="checkbox" name="" id="check" className="input_checkbox"/>
                <label htmlFor="check"  className="label-checkbox">
                    <h2 className="recuerdame">Recuerdame</h2>
                </label>



               
                <p className="ayuda cursor">¿Necesitas ayuda?</p>
            </div>
            <div className="cont_botom">

                <div className="terminando">
                    <p className="primera_vez">¿Primera vez en Netflix?  </p>
                    <p className="font-suscribete">Suscríbete ya</p>
                </div>
                <p className="pri">
                Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <a href="vacio" className="cursor">Más info.</a>
                </p>
            </div>
           


            <div>

            </div>
        </div>
    )
}

export default CardLogin;