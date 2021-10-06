import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faPlus } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Card,CardBody,Button,CardTitle} from "reactstrap"
import moment from 'moment'
import "./scss/main.scss"
import {connect} from "react-redux"
import {AddREMINDER,Delete_REMINDER,Clear_REMINDERS} from "./actions"
import Nav from "./components/navbar"
const times=<FontAwesomeIcon icon={faTimes}/>
const add=<FontAwesomeIcon icon={faPlus}/>
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
              text:"",
              date:null
        }
    }
    add(){
    this.props.AddREMINDER(this.state.text,this.state.date)
    }
    deleting(id){
        this.props.Delete_REMINDER(id)
    }
    clear(){
        this.props.Clear_REMINDERS()
    }
    returnReminders(){
    const {reminders}=this.props
    console.log(reminders)
    return(reminders.map(reminder=>{
        return(
        <Card key={reminder.id} className="my-2">
            <CardBody> 
                <div className="row d-flex py-0">
                <CardTitle className="lead col-10 py-0">{reminder.text}<br/>
                <small>{moment(new Date(reminder.date)).fromNow()}</small>
                </CardTitle>
                <button className="col-1 btn btn-warning rounded-circle"
                onClick={()=>this.deleting(reminder.id)}
                >
                    <i>{times}</i>
                </button>
                </div>
            </CardBody>
        </Card>
        )
    }
    )
        )
    }
    render() {
        return(
        <div>
            <Nav/>
            <Container className="mt-5">
                <Row className="mb-3 gy-1 gx-0">
                        <div className="col-lg-4 col-md-7 mx-auto my-1">
                            <input className="form-control form-control-lg rounded-0" type="text" placeholder="Task"
                              onChange={(event)=>{
                                this.setState({
                                        text:event.target.value,
                                })
                            }}/>
                        </div>
                        <div className="col-lg-4 col-md-7 mx-auto my-1">
                            <input className="form-control form-control-lg rounded-0" type="datetime-local"
                            onChange={(event)=>{
                                this.setState({
                                        date:event.target.value,
                                })
                            }}/>
                        </div>
                        <div className="col-lg-4 col-md-7 mx-auto my-1">
                            <Button className="form-control btn-lg rounded-0 border-0 btn-success add"
                            onClick={()=>this.add()}>Add {add}</Button>
                        </div>
                </Row>
                <Row>
                    <div className="col-lg-6 col-md-9 mx-auto my-3">
                    {this.returnReminders()}
                    </div>
                </Row>
                <Row>
                    <button className="btn btn-success btn-lg col-5 mx-auto rounded-0"
                    onClick={()=>this.clear()}>Clear All !</button>
                </Row>
            </Container>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        reminders:state,
        }
}
export default connect(mapStateToProps,{AddREMINDER,Delete_REMINDER,Clear_REMINDERS})(App);