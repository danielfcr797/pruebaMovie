import './header.scss';
import logo from '../../../images/netflix.svg';

  function HeaderLogin() {
      return(
          <div className="container_main_header">
              <img src={logo} alt="" className="logo" />
          </div>

      )
      
  }

  export default HeaderLogin;