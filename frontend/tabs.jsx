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
    this.setState({ tabId: idx });
  }

  render() {
    let content = this.props.tabArr[this.state.tabId].content;
    const tabWidget = this.props.tabArr.map( (el ,idx) => {
      return (
          <h1 key={idx} className="tab-header" onClick={ () => {this.setTab(idx)}}>
            {el.title}
          </h1>
        )
    })

    return (
      <div className="tabWidget">
        <div className="tab-div">
          {tabWidget}
        </div>
        <article className="tab-content">{content}</article>
      </div>
    )
  }
}

export default Tabs;