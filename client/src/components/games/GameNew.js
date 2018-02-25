import React, { Component } from 'react';
import GameForm from './GameForm'
import { Redirect } from 'react-router'

class GameNew  extends Component {
  constructor () {
    super();
    this.state = {
      fireRedirect: false
    }
  }


  render() {
    const { from } = this.props.location.state || '/game/new'
    const { fireRedirect } = this.state
    const showResults = values => {
      this.setState({ fireRedirect: true })
      new Promise(resolve => {
        console.log(values)
        resolve()
      })
    }
    return (
      <div>
        <GameForm onSubmit={showResults} />
          {fireRedirect && (
            <Redirect to={from || '/profile'}/>
          )}
      </div>
    )
  }

}

export default GameNew;
