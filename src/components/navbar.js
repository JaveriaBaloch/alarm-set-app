import { Component } from "react";
import {Container,NavbarBrand} from "reactstrap"
import "../scss/Navbar.scss"

class App extends Component{
   render() {
       return(
            <div className="navbar">
                <Container>
                    <NavbarBrand>Alarm-set-app</NavbarBrand>
                    <i className="fas fa-clock fa-3x"></i>
                </Container>
            </div>)
   }
}
export default App