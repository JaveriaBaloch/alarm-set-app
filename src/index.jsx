import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reminders from './redux';
import App from "./App"
const store=createStore(reminders);
ReactDOM.render(
<Provider store={store}>
    <App/>
    </Provider>,document.getElementById("root")
)