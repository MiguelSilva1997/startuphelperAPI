import React, { Component } from 'react';
import GameForm from './GameForm'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import GameApi from '../utils/teamApi'

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
        GameApi.postGame(values, this.props.auth.uid)
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(GameNew);
