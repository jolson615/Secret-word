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
        <h1>Secret word INPUT_TITLE_HERE</h1>
        <div className="word-block">
          <h3 className="word" onClick={component.handleClick}>INPUT_WORD1_HERE</h3>
        </div>
      </div>
    )
  }
  return component;
}

export default Secret;
