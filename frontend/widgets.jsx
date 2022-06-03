import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const hello = React.createElement('h1', null, "hello, from react")
  
    // component, props, children
  
    const hello = <h1>Hello from React :D</h1>
  
    ReactDOM.render(<Clock />, root)
  })