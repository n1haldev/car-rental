import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
const root=document.getElementById("root")

const reactRoot=ReactDOM.createRoot(root)
reactRoot.render(<App/>)


// ReactDom.render(<App/>,document.getElementById("root"))