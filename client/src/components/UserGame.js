import React, { Component } from 'react';
import GameList from './GameList'
import GameApi from './utils/teamApi'

class UserGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    GameApi.getUserGames(this.props.id)
      .then((games) => this.setState({ games: games}))
      .catch((error) => console.error({error}))
  }

  render() {
    return (
      <div>
        <GameList
          games = { this.state.games }
        />
      </div>
    );
  }
}

export default UserGame;
