import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock'
import Tabs from './tabs'

const tabArr = [
  {title: 'Sprite', content: 'More Sprite'},
  {title: "CocaCola", content: 'More Coke'}
]

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const hello = React.createElement('h1', null, "hello, from react")
  
    // component, props, children

  
    const hello = <h1>Hello from React :D</h1>
  
    ReactDOM.render(
      <div>
        <Clock/>
        <Tabs tabArr={tabArr} />
      </div>,
      root
    )
  })