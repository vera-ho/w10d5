import React from "react";
import ReactDOM from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabId: 0
    }

    this.setTab = this.setTab.bind(this);
  }

  setTab(idx) {
    this.setState({ tabId: idx }, () => {
      console.log(this.state.tabId)
    })
  }

  render() {
    const tabWidget = this.props.tabArr.map( (el ,idx) => {
      return (
        <div key={idx} className="tab-div" onClick={ () => {this.setTab(idx)}}>
          <h1 className="tab-header">{el.title}</h1>
        </div>)
    })

    let content = this.props.tabArr[this.state.tabId].content;

    return (
      <div className="tabWidget">
        {tabWidget}
        <article className="tab-content">{content}</article>
      </div>
    )
  }
}

export default Tabs;