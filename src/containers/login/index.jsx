import './style.scss';
import HeaderLogin from '../../components/login/header/header';
import Body from '../../components/login/body/body';
function loginContainer() {
    return(
        <div className="container_login">
            <div className="box_shadow">
            </div>
            <HeaderLogin></HeaderLogin>
            <div className="container_body">

                <Body>
                    
                </Body>
               
            </div>
                


        </div>


    )
}

export default loginContainer;