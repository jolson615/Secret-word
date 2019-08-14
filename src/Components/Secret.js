import React from 'react';

const Secret = (props) => {
  const component = new React.Component();
  component.state = {
    currentWord: null
  }
  component.handleClick = (event) => {
    console.log(event.target.innerHTML)
    let word = event.target.innerHTML
    component.setState({currentWord: word})
  }
  component.checkActive = (word) => {
    if (component.state.currentWord === word) {
      return "word active"
    }
    return "word"
  }
  component.checkWin = () => {
    if (component.state.currentWord === props.answer) {
      return "winning"
    }
    return "losing"
  }
  component.render = () => {
    return (
      <div className={"Secret " + component.checkWin()}>
        <h1>Secret word {props.title}</h1>
        <div className="word-block">
          <h3 className={component.checkActive(props.words[0])} onClick={component.handleClick}>{props.words[0]}</h3>
          <h3 className={component.checkActive(props.words[1])} onClick={component.handleClick}>{props.words[1]}</h3>
          <h3 className={component.checkActive(props.words[2])} onClick={component.handleClick}>{props.words[2]}</h3>
          <h3 className={component.checkActive(props.words[3])} onClick={component.handleClick}>{props.words[3]}</h3>
        </div>
      </div>
    )
  }
  return component;
}

export default Secret;
