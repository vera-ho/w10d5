import React from "react";
import ReactDOM from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabId: 0
    }
  }

  render() {

    const tabWidget = this.props.items.map((el, idx) => {
      return <h1 key={idx}>{el}</h1>
    })

    return (
      <div className="tabWidget">
        {tabWidget}
      </div>
    )
  }


}

export default Tabs

