import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faPlus } from '@fortawesome/free-solid-svg-icons'
import {Container, Row,Card,CardBody,Button, CardTitle} from "reactstrap"
import "../scss/main.scss"

const times=<FontAwesomeIcon icon={faTimes}/>
const add=<FontAwesomeIcon icon={faPlus}/>
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
                task:"walk",
                time:"9 hours",
                displaytask:null,
                displaytime:null
        }
    }
    timing(){
      console.log(this.state)
      this.setState({
        displaytask:this.state.task,
        displaytime:this.state.time
      })
    }
    render() {
        return(
            <Container className="mt-5">
                <Row className="mb-3 gy-1 gx-0">
                        <div className="col-lg-4 col-md-7 mx-auto my-1">
                            <input className="form-control form-control-lg rounded-0" type="text" placeholder="Task"
                              onChange={(event)=>{
                                this.setState({
                                        task:event.target.value,
                                })
                            }}/>
                        </div>
                        <div className="col-lg-4 col-md-7 mx-auto my-1">
                            <input className="form-control form-control-lg rounded-0" type="datetime-local"
                            onChange={(event)=>{
                                this.setState({
                                        time:event.target.value,
                                })
                            }}/>
                        </div>
                        <div className="col-lg-4 col-md-7 mx-auto my-1">
                            <Button className="form-control btn-lg rounded-0 border-0 btn-success add"
                            onClick={()=>this.timing()}>Add {add}</Button>
                        </div>
                </Row>
                <Row>
                    <div className="col-lg-6 col-md-9 mx-auto my-3">
                        <Card>
                            <CardBody>
                                <div className="row d-flex py-0">
                                <CardTitle className="lead col-10 py-0">{this.state.displaytask} <br/>
                                <small>{this.state.displaytime}</small></CardTitle>
                                <button className="col-1 btn btn-warning rounded-circle">
                                    <i>{times}</i>
                                </button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <button className="btn btn-success btn-lg col-5 mx-auto rounded-0">Clear All !</button>
                </Row>
            </Container>
        )
    }
}
export default Main