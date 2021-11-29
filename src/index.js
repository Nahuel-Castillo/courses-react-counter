import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CounterApp from "./CounterApp";
// import FirstApp from './FirstApp';

// const greeting = <h2>Hello World</h2>;

const divRoot = document.querySelector("#root"); // div from public/index.html
// ReactDOM.render(<FirstApp greeting='Hello World' />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
