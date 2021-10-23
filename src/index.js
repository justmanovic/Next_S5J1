import React from "react"
import ReactDOM from "react-dom"
import 'semantic-ui-css/semantic.min.css'
import Style from "./style.css"
import Clients from './components/Clients'
import faker from "faker"


const App = () => {

  return (
    <Clients />
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)