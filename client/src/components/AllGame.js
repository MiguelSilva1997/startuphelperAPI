import React, { Component } from 'react';
import GameList from './GameList'
import GameApi from './utils/teamApi'

class AllGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    GameApi.getAllGames()
      .then((games) => this.setState({ games: games}))
      .catch((error) => console.error({error}))
  }

  render() {
    return (
      <div className="row">
        <div className="col s7 offset-s3">
          <h1>All Games</h1>
          <GameList
            games = { this.state.games }
          />
        </div>
      </div>
    );
  }
}

export default AllGame;
