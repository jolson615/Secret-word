import React from 'react';

const Secret = (props) => {
  const component = new React.Component();
  component.state = {
    currentWord: null
  }
  component.handleClick = (event) => {
    console.log(event.target.innerHTML)
  }
  component.checkActive = (word) => {}
  component.checkWin = () => {}
  component.render = () => {
    return (
      <div className="Secret" >
        <h1>Secret word {props.title}</h1>
        <h2>{component.state}</h2>
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
