import React from 'react';


// parent 
class App extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
  
      const name = 'Alvin';
      const age = 142;
      const people = ["Patrick", "Naran", "Hella Vera", "Eric", "Leo", "Vivian", "Karen", "Alan"]
      const food = ["hummus", "pizza", "ice cream", "bananas"];
  
      return (
        <div className='app'>
          <div>hello, i'm {name}</div>
          <div>I am {age * 2} years old</div>
        </div>
      )
    }
  };
  
  export default App;