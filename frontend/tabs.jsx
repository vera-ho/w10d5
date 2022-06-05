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
    // console.log(this.props)
    // console.log(this.props.tabArr[0]["title"])
    const tabWidget = this.props.tabArr.map( (el, idx) => {
      return <div key={el["title"]}>{el["content"]}</div>
    })

    return (
      <div className="tabWidget">
        {tabWidget}
      </div>
    )
  }
}

export default Tabs;

