import { Component } from "react";
import {Container,NavbarBrand} from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import "../scss/Navbar.scss"
const iconof = <FontAwesomeIcon icon={faClock} className="fa-4x text-white"/>
class App extends Component{
   render() {
       return(
            <div className="navbar">
                <Container>
                    <NavbarBrand color="success">Alarm-set-app</NavbarBrand>
                    {iconof}
                </Container>
            </div>)
   }
}
export default App