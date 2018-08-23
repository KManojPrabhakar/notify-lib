import React from 'react';
import { render } from "react-dom";
import { TextInput } from "./lib";
import './stylesheets/app.css'


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput positionValue="topright" notifyType="info" />
  </div>
);

render(<App />, document.getElementById("root"));